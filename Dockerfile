FROM public.ecr.aws/awsguru/aws-lambda-adapter:0.8.4 AS adapter

FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine

# Lambda Web Adapter: traduz eventos do Lambda Function URL em
# requisições HTTP normais para o nginx, e vice-versa.
COPY --from=adapter /lambda-adapter /opt/extensions/lambda-adapter

# O adapter precisa saber em qual porta o servidor HTTP está escutando.
ENV PORT=8080
ENV AWS_LWA_PORT=8080

COPY nginx-main.conf /etc/nginx/nginx.conf
COPY default.conf /etc/nginx/conf.d/default.conf

# Resultado do "npm run build" (pasta padrão do Vite é dist/)
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
