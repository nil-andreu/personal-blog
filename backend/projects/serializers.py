from rest_framework import serializers
from .models import Project, Technology, Resource, Difficulties

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'
        lookup_field = 'slug'