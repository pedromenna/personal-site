resource "aws_ecr_repository" "site" {
  name                 = "${var.bucket_name}-site"
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  image_scanning_configuration {
    scan_on_push = true
  }
}

import {
  to = aws_ecr_repository.site
  id = "personal-menna-site-site"
}

resource "aws_ecr_lifecycle_policy" "site" {
  repository = aws_ecr_repository.site.name
  policy = jsonencode({
    rules = [{
      rulePriority = 1
      description  = "Manter só as 5 imagens mais recentes"
      selection = {
        tagStatus   = "any"
        countType   = "imageCountMoreThan"
        countNumber = 5
      }
      action = {
        type = "expire"
      }
    }]
  })
}
