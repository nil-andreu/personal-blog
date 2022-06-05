import pytest

# We need to define environment and setting the django setup to be able to import django models
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
import django
django.setup()
from blog.models import Post

# Mark this test --> test function must start with test_
@pytest.mark.django_db
def test_new_post():
    new_post = Post(title='title')
    new_post.save()
    
    assert new_post.slug == 'title'
    assert new_post.title == 'title'

@pytest.mark.django_db
def test_complex_title():
    new_post = Post(title='New Complex Title')
    new_post.save()
    assert new_post.slug == 'new-complex-title'
    