from django.contrib import admin
from .models import Post, Category, Tag

class PostAdmin(admin.ModelAdmin):
    model = Post

    # Do not include the slug when creating a new on the admin
    fields = (
        'title', 'category', 'tags','status',
    )
    
    list_display = ('title', 'category', 'tags', 'publish','status',)
    list_filter = ('status',)
    search_fields = ('title', 'body',)
    
    

# Register your models here.
admin.site.register(Post,PostAdmin)
admin.site.register(Category)
admin.site.register(Tag)