from django.db import models
from django.utils.text import slugify 

class Category(models.Model):
    category=models.CharField(max_length=200, unique=True, 
                                primary_key=True)
    
    def __str__(self):
        return self.category
    
    class Meta:
        verbose_name='Category'
        verbose_name_plural='Categories'
        
class Tag(models.Model):
    tag=models.CharField(max_length=100, unique=True, 
                           primary_key=True)
    
    def __str__(self):
        return self.tag

    class Meta:
        verbose_name='Tag'
        verbose_name_plural='Tags'
    
# Create your models here.
class Post(models.Model):
    # Title section
    title=models.CharField(blank=False, null=False, unique=True, 
                            max_length=200)
    
    slug=models.SlugField(unique=True)
    body=models.TextField()
    
    # Define category and subcategory
    category=models.ForeignKey(Category, on_delete=models.CASCADE, 
                                blank=True, null=True)
    tags=models.ManyToManyField(Tag)
    
    # Important dates of the blog
    publish=models.DateTimeField(auto_now_add=True)
    edited=models.DateTimeField(auto_now=True)
    status=models.BooleanField(default=True)
    
    def save(self, *args, **kwargs):
        # We create the slug based on the title of the post
        self.slug=slugify(self.title) # lower-case-guions
        super(Post, self).save(*args, **kwargs)
    
    class Meta:
        ordering=('publish', 'title', 'status',)
        verbose_name='Post'
        verbose_name_plural='Posts'
    
    def __str__(self):
        return self.title

class Visit(models.Model):
    # view=models.IntegerField() Each row will be +1
    date=models.DateTimeField(auto_now=True)
    post=models.ForeignKey(Post, on_delete=models.PROTECT)

class Comemnts(models.Model):
    comment=models.CharField(max_length=400, unique=False, 
                               blank=False, null=False)
    user=models.CharField(max_length=100)
    email=models.EmailField(blank=True, null=True)
    post=models.ForeignKey(Post, on_delete=models.CASCADE) # When post deleted, delete all the other things