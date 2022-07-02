# Personal Blog
In this personal blog application, I will handle blog posts, my portfolio, as well as my professional online profile.
It is developed following the Test-Driven Development principles, both unit tests and integration tests.

In the Makefile, you can find some automation of utilities for the backend:
```
    make migrations     # to make the migration files, and migrate them
    make user           # create a superuser in the database
    make test           # run tests with PyTest
```

Some of the most relevant technos I am using are the following.

# GitHub Actions
To automate the test on when pushing the code to the respository.

For the backend, it focuses on testing:
- **Functionality**: that the code is working well
- **Code Quality**: automating checks of the code quality and persistance with PEP8, as well as type hinting.

If we run this utility for GitHub Actions:
```
    gh run list
```
We will get an overview of all workflow we have defined, whether they are triggered via  push, pull request, ...


If we run this utility for GitHub Actions:
```
    gh run list
```
We will get an overview of all workflow we have defined, whether they are triggered via  push, pull request, ...


# Docker && AWS
I am using Docker to containerize my application, so it can be easily deployed on a server EC2 in AWS.
The simple CI/CD pipeline will be the following when pushing to main branch:
1. Making Integration test with GitHub Actions
2. Creationg of Docker image with GitHub Actions
3. Pushing Docker image to ECS of AWS
4. Deploy the image from ECS to EC2