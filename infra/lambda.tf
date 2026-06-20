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

  lifecycle {
    ignore_changes = [image_uri]
  }

  depends_on = [aws_cloudwatch_log_group.site]
}

resource "aws_lambda_function_url" "site" {
  function_name      = aws_lambda_function.site.function_name
  authorization_type = "NONE"
}

resource "aws_lambda_permission" "url_public" {
  statement_id           = "AllowPublicInvokeFunctionUrl"
  action                 = "lambda:InvokeFunctionUrl"
  function_name          = aws_lambda_function.site.function_name
  principal              = "*"
  function_url_auth_type = "NONE"

  depends_on = [aws_lambda_function_url.site] # <- única mudança
}