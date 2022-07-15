from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView, RetrieveAPIView
from .models import Project
from .serializers import ProjectSerializer
from rest_framework.authentication import SessionAuthentication, BasicAuthentication 

# For making of csrf exempt the post method
class CsrfExemptSessionAuthentication(SessionAuthentication):

    def enforce_csrf(self, request):
        return  # To not perform the csrf check previously happening

# View for listing all the posts
class ProjectsListView(ListAPIView):
    queryset = Project.objects.all().filter(status=True).order_by('-valoration', '-published')
    serializer_class = ProjectSerializer
    lookup_field = 'slug' # will search for the slug
    permission_classes = (permissions.AllowAny, ) # all users can see