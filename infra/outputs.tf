

output "ecr_repository_url" {
  description = "Repositório usado pela pipeline para publicar a imagem Docker do site"
  value       = aws_ecr_repository.site.repository_url
}

output "lambda_function_name" {
  description = "Nome da função usada pela pipeline para atualizar o código"
  value       = aws_lambda_function.site.function_name
}

output "lambda_site_url" {
  description = "URL pública do site servido via Lambda Function URL"
  value       = aws_lambda_function_url.site.function_url
}
