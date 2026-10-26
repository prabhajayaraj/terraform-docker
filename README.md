Task 3: Infrastructure as Code (IaC) with Terraform

**Project Overview**

This project demonstrates Infrastructure as Code (IaC) using Terraform to provision and manage a Docker container locally. Terraform automates the creation of an Nginx Docker container, making infrastructure deployment repeatable and easy to manage.

**Objective**

To understand how to use Terraform to create, validate, plan, manage, and destroy Docker infrastructure through configuration files.

**Tools and Technologies**

1.Terraform – Infrastructure as Code tool
2.Docker – Containerization platform
3.Nginx – Web server running inside the Docker container
4.Git and GitHub – Version control and project hosting
5.PowerShell – Command-line execution on Windows

**Project Implementation**

1.Created a main.tf file with the Terraform Docker provider configuration.
2.Configured Terraform to download the Nginx Docker image.
3.Created a Docker container named terraform-task3-nginx.
4.Mapped container port 80 to local port 8085.
5.Initialized Terraform and validated the configuration.
6.Used terraform plan to check the infrastructure changes.
7.Used Terraform state commands to inspect managed resources.
8.Used terraform destroy to remove the resources after testing.

**Commands Used**
terraform init
terraform validate
terraform plan
terraform apply
terraform state list
terraform state show docker_container.terraform_nginx
terraform show
terraform destroy

**Expected Outcome**
1.Successfully provisioned an Nginx Docker container using Terraform.
2.Accessed the Nginx welcome page through http://localhost:8085.
3.Verified the infrastructure using Terraform state commands.
4.Learned how to manage the infrastructure lifecycle using IaC.

**Project Files**
1.main.tf – Terraform configuration for the Docker image and container.
2. .gitignore – Excludes generated Terraform files and state files from Git.
3.Execution logs and screenshots – Evidence of Terraform commands and results.

**Key Learnings**

1.Understanding Infrastructure as Code (IaC).
2.Configuring and using the Terraform Docker provider.
3.Initializing, validating, and planning infrastructure.
4.Managing resources using Terraform state commands.
5.Creating and destroying Docker infrastructure.
6.Using GitHub to maintain project source code.

**Application Link:**
Localhost: http://localhost:8085
