resource "aws_lambda_function" "site" {
  function_name = local.name_prefix
  role          = aws_iam_role.lambda_exec.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.site.repository_url}:${var.initial_image_tag}"

  memory_size = var.lambda_memory_size
  timeout     = var.lambda_timeout

  logging_config {
    log_format = "JSON"
    log_group  = aws_cloudwatch_log_group.site.name
  }

  # O deploy real da imagem acontece na pipeline SITE DEPLOY via
  # `aws lambda update-function-code` usando a tag sha-<commit>.
  # O Terraform nunca deve sobrescrever essa imagem depois de criada.
  lifecycle {
    ignore_changes = [image_uri]
  }

  depends_on = [aws_cloudwatch_log_group.site]
}

resource "aws_lambda_function_url" "site" {
  function_name      = aws_lambda_function.site.function_name
  authorization_type = "NONE"
}
