import os
import string
import django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()
from blog.models import Post, Tag, Category, Visit, Comments
import pytest
# We need to define environment and setting the django setup to be able to import django models


# UNIT TESTING
@pytest.mark.django_db
def test_new_post() -> bool:
    """ Test if with a simple word, the slug is created correctly
    """
    new_post = Post(title='title')
    new_post.save()
    assert new_post.slug == 'title'
    assert new_post.title == 'title'


@pytest.mark.django_db
def test_complex_title() -> bool:
    """ Multi-word title is created correctly
    """
    new_post = Post(title='New Complex Title')
    new_post.save()
    assert new_post.slug == 'new-complex-title'


@pytest.mark.django_db
def test_complex_title_multiple() -> bool:
    """ When a complex title is repeated multiple times, to except a certain behavior
    """
    with pytest.raises(Exception):
        first_post = Post(title='New Complex Title')
        first_post.save()
        later_post = Post(title='New Complex Title')
        later_post.save()

# INTEGRATION TESTING
@pytest.mark.django_db
def test_relations_tag_post() -> bool:
    """Integration test between the table ot Tags and Posts
    """
    new_tag = Tag(tag="Machine Learning")
    new_tag.save()
    new_post = Post(title="New Post")
    new_post.save()
    new_post.tags.add("Machine Learning")  # Because of Many-to-Many relationship, need to be added this way

@pytest.mark.django_db
def test_relations_category_post() -> bool:
    new_category: string = Category(category="New Category")
    new_category.save()
    new_post = Post(title="New Post", category=new_category)  # category needs to be a category instance
    new_post.save()
    # new_post.category.add("New Category")

@pytest.mark.django_db
def test_relations_visit_post() -> bool:
    new_post = Post(title="New Post")
    new_post.save()
    new_visit = Visit(post=new_post)
    new_visit.save()

@pytest.mark.django_db
def test_relations_comment_post() -> bool:
    new_post = Post(title="New Post")
    new_post.save()
    new_comment = Comments(comment="New Comment", user="New User", post=new_post)
    new_comment.save()
