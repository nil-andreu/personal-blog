# Personal Blog
In this personal blog application, I will handle blog posts, my portfolio, as well as my professional online profile.
It is developed following the Test-Driven Development principles, both unit tests and integration tests.

In the Makefile, you can find some automation of utilities for the backend:
```
    make migrations     # to make the migration files, and migrate them
    make user           # create a superuser in the database
    make test           # run tests with PyTest
```

Some of the most relevant technos I am using are the following, and some commands that are useful.

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

# Terraform
Infrastructure as a Code is a new way to create the cloud infrastructure.
In this way, you define in code how the servers should be structured. For this, I am using Terraform for the automation &
maintainance of the AWS cloud infrastructure.

For starting with it, we need first to download the necessary packages from the providers we are going to use:
```
    terraform init
```
This will install puligns to interact with the AWS API.

Another useful command:
```
    terraform plan
```
Will take a look to the code, and see which changes needs to be make. So it creates an execution plan.
We could check if the configuration is valid with: *terraform validate*.

And to apply this execution plan:
```
    terraform apply
```
Once applied, we can check the status of our infrastructure with: *terraform state list*.
We could add the tag: --auto-approve to automatically create it, without asking in terminal for confirmation.

In case we wanted to destroy the instances:
```
    terraform destroy
```

# Docker && AWS
I am using Docker to containerize my application, so it can be easily deployed on a server EC2 in AWS.
The simple CI/CD pipeline will be the following when pushing to main branch:
1. Making Integration test with GitHub Actions
2. Creationg of Docker image with GitHub Actions
3. Pushing Docker image to ECS of AWS
4. Deploy the image from ECS to EC2