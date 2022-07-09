terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

# Configure the AWS Provider
provider "aws" {
  region     = var.region
  access_key = var.db_username
  secret_key = var.db_password
}

# Create a resouce: "<provider>_<resource>" "<name_to_this_resource>"
resource "aws_instance" "server" {
  # All the config options
  ami           = "ami-0f7559f51d3a22167"
  instance_type = "t2.micro"

  tags = {
       Name     = "host-server"  # Name of the server
  }
}

resource "aws_s3_bucket" "bucket" {
    bucket      = "nil-andreu-bucket"
    tags        = {
        Name    = "database-server"
    }
}