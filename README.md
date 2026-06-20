# pedro-menna-portfolio

Site pessoal de apresentação profissional, rodando na AWS com deploy automático via GitHub Actions.

## Stack

- **Frontend:** React + Vite
- **Servidor:** Nginx dentro de um container Docker
- **Infra:** AWS Lambda (container image) + ECR
- **IaC:** Terraform
- **CI/CD:** GitHub Actions com OIDC (sem chaves de acesso hardcoded)

## Como funciona

O site é servido por um container Docker com Nginx, rodando dentro de uma Lambda. O adapter traduz as requisições HTTP da Function URL para o Nginx e devolve a resposta, sem precisar de API Gateway ou nenhum serviço extra.

Cada push na `main` que toca arquivos de `src/` dispara o pipeline de deploy, que:

1. Faz o build da imagem Docker
2. Publica no ECR com uma tag `sha-<commit>` única e imutável
3. Atualiza o código da Lambda para usar a nova imagem

A infra (Lambda, ECR, IAM) é gerenciada pelo Terraform e só muda quando arquivos de `infra/` são alterados.

## Pipelines

| Pipeline | Trigger |
|---|---|
| `SITE DEPLOY` | Push em `src/`, `Dockerfile` ou configs do Nginx |
| `PROD DEPLOY` | Push em `infra/` |
| `TERRAFORM DESTROY` | Manual (exige confirmação digitando o nome do ambiente) |

## Estrutura

```
.
├── src/                  # Código do site (React)
├── infra/                # Terraform
├── .github/workflows/    # Pipelines
├── Dockerfile
├── nginx-main.conf
└── default.conf
```

## Infra na AWS

- **Lambda:** roda o container, exposta via Function URL pública
- **ECR:** repositório de imagens com retenção das 10 últimas tags `sha-*`
- **IAM:** role mínima, só permissão de escrita de logs
