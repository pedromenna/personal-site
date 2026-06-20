# Pré-criar o log group permite controlar a retenção. Sem isso, o Lambda
# cria o log group automaticamente com retenção infinita (custo crescente).
resource "aws_cloudwatch_log_group" "site" {
  name              = "/aws/lambda/${local.name_prefix}"
  retention_in_days = var.log_retention_days
}
