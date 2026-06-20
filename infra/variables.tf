variable "project_name" {
  description = "Nome base do projeto, usado para nomear os recursos"
  type        = string
  default     = "personal-menna-site"
}

variable "environment" {
  description = "Nome do ambiente (prod, staging, etc)"
  type        = string
  default     = "prod"
}

variable "aws_region" {
  description = "Região AWS onde os recursos serão criados"
  type        = string
  default     = "us-east-1"
}

variable "lambda_memory_size" {
  description = "Memória (MB) alocada para a função Lambda"
  type        = number
  default     = 256
}

variable "lambda_timeout" {
  description = "Timeout (segundos) da função Lambda"
  type        = number
  default     = 10
}

variable "log_retention_days" {
  description = "Retenção (dias) dos logs no CloudWatch"
  type        = number
  default     = 30
}

variable "ecr_image_retention_count" {
  description = "Quantidade de imagens (tag sha-*) mantidas no ECR"
  type        = number
  default     = 10
}

variable "initial_image_tag" {
  description = <<-EOT
    Tag de uma imagem placeholder usada SOMENTE na criação inicial da Lambda
    (a Lambda Image precisa de uma imagem já existente no ECR para ser criada).
    Os deploys reais acontecem via pipeline SITE DEPLOY, com tags sha-<commit>,
    e o Terraform nunca sobrescreve essa imagem depois (lifecycle.ignore_changes).
  EOT
  type        = string
  default     = "bootstrap"
}
