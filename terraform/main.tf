terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region = "eu-west-3"
  access_key = ""
  secret_key = ""
}

# Create a resouce: "<provider>_<resource>" "<name_to_this_resource>"
resource "aws_instance" "server" {
  # All the config options
  ami           = "ami-0f5094faf16f004eb"
  instance_type = "t2.micro"

  tags = {
       Name = "Web Server"
  }
}