import string
from datetime import datetime
from django.db import models
from django.utils.text import slugify
from django.core.validators import MaxValueValidator, MinValueValidator


class Technology(models.Model):
    technology = models.CharField(max_length=200, unique=True, primary_key=True)


# Create your models here.
class Project(models.Model):
    title: string = models.CharField(max_length=300, blank=False, null=False, unique=True)
    summary: string = models.TextField(blank=True, null=True)
    technology = models.ManyToManyField(Technology, blank=True, null=True)
    slug: string = models.SlugField()
    github: string = models.URLField()
    publish: datetime = models.DateTimeField(auto_now_add=True)
    edited: datetime = models.DateTimeField(auto_now=True)
    status: bool = models.BooleanField(default=True)
    likes: int = models.IntegerField(default=0)
    difficulty: int = models.IntegerField(default=1, validators=[
            MaxValueValidator(10),
            MinValueValidator(1)
        ])

    def __str__(self) -> string:
        return self.title

    def save(self, *args, **kwargs):
        self.slug: string = slugify(self.title)  # lower-case-guions
        super(Project, self).save(*args, **kwargs)
