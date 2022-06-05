# Generated by Django 3.2 on 2022-06-05 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('slug', models.SlugField(unique=True)),
                ('creating', models.DateTimeField(auto_now=True)),
                ('edited', models.DateTimeField(auto_now_add=True)),
                ('published', models.BooleanField(default=True)),
            ],
        ),
    ]
