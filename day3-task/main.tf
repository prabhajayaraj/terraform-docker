
terraform {
  required_providers {
    docker = {
      source  = "kreuzwerker/docker"
      version = "~> 4.2.0"
    }
  }
}

provider "docker" {}

resource "docker_image" "nginx" {
  name         = "nginx:latest"
  keep_locally = true
}

resource "docker_container" "terraform_nginx" {
  name  = "terraform-task3-nginx"
  image = docker_image.nginx.image_id

  ports {
    internal = 80
    external = 8085
  }
}
