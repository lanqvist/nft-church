# Stage 1: Build with security checks
FROM node:18-alpine as builder
WORKDIR /app

# Проверка наличия обязательных файлов
RUN test -f package.json || (echo "FATAL: package.json not found!" && exit 1)
RUN test -f package-lock.json || (echo "FATAL: package-lock.json not found!" && exit 1)

# Копируем с явным указанием прав
COPY --chown=node:node package*.json ./

# Установка зависимостей с кэшированием
RUN npm i --no-audit --prefer-offline \
    && mkdir -p /app/node_modules \
    && chown -R node:node /app

USER node
COPY --chown=node:node . .
RUN npm run build

# Stage 2: Optimized production image
FROM nginx:1.25-alpine-slim

# Проверка наличия конфигов
RUN test -f /etc/nginx/conf.d/default.conf || (echo "Nginx config missing!" && exit 1)

COPY --from=builder --chown=nginx:nginx /app/build /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf

HEALTHCHECK --interval=30s --timeout=3s \
  CMD curl -f http://localhost/healthz || exit 1

EXPOSE 8080
ENTRYPOINT ["/sbin/tini", "--"]
CMD ["nginx", "-g", "daemon off;"]