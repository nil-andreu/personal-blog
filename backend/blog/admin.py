from django.contrib import admin
from .models import Post, Category, Tag, Visit


class PostAdmin(admin.ModelAdmin):
    model=Post

    # Do not include the slug when creating a new on the admin
    fields=(
        'title', 'body', 'category', 'tags','status', 
    )
    
    list_display=('title','category', 'publish','status', )
    list_filter=('status', )
    search_fields=('title', 'body', )


class VisitAdmin(admin.ModelAdmin):
    model=Visit
    
    list_display=('post','date', )
    list_filter=('post','date', )
    search_fields=('post__title','date', )


# Register your models here.
admin.site.register(Post,PostAdmin, )
admin.site.register(Category, )
admin.site.register(Tag, )
admin.site.register(Visit, VisitAdmin, )
