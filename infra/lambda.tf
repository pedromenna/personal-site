
resource "aws_iam_role" "lambda_exec" {
  name = "${var.bucket_name}-lambda-exec"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [{
      Action = "sts:AssumeRole"
      Effect = "Allow"
      Principal = {
        Service = "lambda.amazonaws.com"
      }
    }]
  })
}

resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role       = aws_iam_role.lambda_exec.name
  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

resource "aws_lambda_function" "site" {
  function_name = "${var.bucket_name}-site"
  role          = aws_iam_role.lambda_exec.arn
  package_type  = "Image"
  image_uri     = "${aws_ecr_repository.site.repository_url}:latest"

  memory_size = 256
  timeout     = 10

  lifecycle {
    ignore_changes = [image_uri]
  }
}

# Function URL: endpoint HTTPS público, sem precisar de API Gateway
# (que cobraria por requisição). auth_type = NONE = aberto pra internet.
resource "aws_lambda_function_url" "site" {
  function_name      = aws_lambda_function.site.function_name
  authorization_type = "NONE"
}
