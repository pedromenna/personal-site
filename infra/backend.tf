# bucket, key e region são passados via -backend-config no `terraform init`
# (veja .github/workflows/terraform.yml).
#
# Lock de state via S3 nativo (use_lockfile=true) — não depende mais de
# tabela DynamoDB. Requer Terraform >= 1.10, já fixado em versions.tf.
terraform {
  backend "s3" {}
}
