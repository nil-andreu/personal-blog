from datetime import datetime
import string
from django.db import models
from django.utils.text import slugify
from typing import Iterator, TypeVar, Generic, Optional


class Category(models.Model):
    category: string = models.CharField(max_length=200, unique=True,
                                primary_key=True)

    def __str__(self) -> string:
        return self.category

    class Meta:
        verbose_name: string = 'Category'
        verbose_name_plural: string = 'Categories'


class Tag(models.Model):
    tag: string = models.CharField(max_length=100, unique=True,
                           primary_key=True)

    def __str__(self) -> string:
        return self.tag

    class Meta:
        verbose_name: string = 'Tag'
        verbose_name_plural: string = 'Tags'


# Create your models here.
class Post(models.Model):
    # Title section
    title: string = models.CharField(blank=False, null=False, unique=True,
                             max_length=200)
    slug: string = models.SlugField(unique=True)
    body: string = models.TextField()
    # Define category and subcategory
    category: string = models.ForeignKey(Category, on_delete=models.CASCADE,
                                 blank=True, null=True)
    tags: string = models.ManyToManyField(Tag, blank=True, null=True)
    # Important dates of the blog
    publish: datetime = models.DateTimeField(auto_now_add=True)
    edited: datetime = models.DateTimeField(auto_now=True)
    status: bool = models.BooleanField(default=True)

    def save(self, *args, **kwargs):
        # We create the slug based on the title of the post
        self.slug: string = slugify(self.title)  # lower-case-guions
        super(Post, self).save(*args, **kwargs)

    class Meta:
        ordering: tuple = ('publish', 'title', 'status', )
        verbose_name: string = 'Post'
        verbose_name_plural: string = 'Posts'

    def __str__(self) -> string:
        return self.title


class Visit(models.Model):
    # view = models.IntegerField() Each row will be +1
    date: datetime = models.DateTimeField(auto_now=True)
    post: int = models.ForeignKey(Post, on_delete=models.PROTECT)


class Comments(models.Model):
    comment: string = models.CharField(max_length=400, unique=False,
                               blank=False, null=False)
    user: string = models.CharField(max_length=100)
    email: string = models.EmailField(blank=True, null=True)
    post: int = models.ForeignKey(Post, on_delete=models.CASCADE)  # When post deleted, delete all the other things
