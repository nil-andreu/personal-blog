from django.contrib import admin
from .models import Technology, Project, Difficulties, Resource

# Register your models here.
admin.site.register(Project)
admin.site.register(Difficulties)
admin.site.register(Resource)