import os
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from blog.models import Post
import pytest
# We need to define environment and setting the django setup to be able to import django models


# Mark this test --> test function must start with test_
@pytest.mark.django_db
def test_new_post():
    """ Test if with a simple word, the slug is created correctly
    """
    new_post = Post(title='title')
    new_post.save()
    assert new_post.slug == 'title'
    assert new_post.title == 'title'


@pytest.mark.django_db
def test_complex_title():
    """ Multi-word title is created correctly
    """
    new_post = Post(title='New Complex Title')
    new_post.save()
    assert new_post.slug == 'new-complex-title'


@pytest.mark.django_db
def test_complex_title_multiple():
    """ When a complex title is repeated multiple times, to except a certain behavior
    """
    with pytest.raises(Exception):
        first_post = Post(title='New Complex Title')
        first_post.save()
        later_post = Post(title='New Complex Title')
        later_post.save()
