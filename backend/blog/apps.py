import string
from django.apps import AppConfig


class BlogConfig(AppConfig):
    default_auto_field: string = 'django.db.models.BigAutoField'
    name: string = 'blog'
