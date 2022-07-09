from .views import ProjectsListView
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('', ProjectsListView.as_view())
    # path('get-all/', admin.site.urls),
    # path('get-category/<category:str> ', admin.site.urls),
    # path('get-recommended/<user_token:str>', admin.site.urls),
]