import os
import string
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from blog.models import Post, Tag, Category, Visit, Comments
import pytest

@pytest.mark.django_db
def test_new_post() -> bool:
    """ Test if with a simple word, the slug is created correctly
    """
    new_post = Post(title='title')
    new_post.save()
    assert new_post.slug == 'title'
    assert new_post.title == 'title'