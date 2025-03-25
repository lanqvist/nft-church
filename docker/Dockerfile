# Stage 1: Build with dependencies cache
FROM node:18-alpine as builder
WORKDIR /app

# Кэшируем зависимости
COPY package.json package-lock.json ./
RUN npm i --silent

# Копируем исходники
COPY . .

# Аргументы сборки
ARG REACT_APP_API_URL=https://api.example.com
ARG REACT_APP_ENV=production
ENV NODE_ENV=production

RUN npm run build && \
    npm prune --production

# Stage 2: Production image with security hardening
FROM nginx:1.25-alpine-slim

# Устанавливаем зависимости безопасности
RUN apk add --no-cache tini && \
    rm -rf /var/cache/apk/*

# Конфигурация безопасности
RUN chown -R nginx:nginx /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

# Защита от утечки информации
RUN sed -i 's/# server_tokens off;/server_tokens off;/g' /etc/nginx/nginx.conf && \
    echo "more_clear_headers Server;" >> /etc/nginx/conf.d/default.conf

USER nginx
EXPOSE 8080
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["nginx", "-g", "daemon off;"]