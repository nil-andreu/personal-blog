from django.contrib import admin
from .models import Post, Category

class PostAdmin(admin.ModelAdmin):

    model = Post

    # Do not include the slug
    fields = (
        'title', 'category', 'tags', 'published',
    )

# Register your models here.
admin.site.register(Post,PostAdmin)
admin.site.register(Category)