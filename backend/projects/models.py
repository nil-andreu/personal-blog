import string
from datetime import datetime
from django.db import models
from django.utils.text import slugify
from django.core.validators import MaxValueValidator, MinValueValidator
from .utils.file_utils import validate_file_extension, upload_file 

class Technology(models.Model):
    technology = models.CharField(max_length=200, unique=True, primary_key=True)


# Create your models here.
class Project(models.Model):
    title: string = models.CharField(max_length=300, blank=False, null=False, unique=True)
    summary: string = models.TextField(blank=True, null=True)
    technology = models.ManyToManyField(Technology)
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


class Difficulties(models.Model):
    title = models.CharField(max_length=300)  # expressing difficulties of the project in a text, and how were overcame
    description = models.TextField()
    solution = models.TextField()
    project = models.ForeignKey(Project, on_delete=models.PROTECT)


class Resource(models.Model):
    title = models.CharField(max_length=300, blank=True, null=True, unique=True)
    description = models.TextField(blank=True, null=True)
    
    file = models.FileField(upload_to=upload_file, validators=[validate_file_extension])

    def __str__(self):
        return self.title
