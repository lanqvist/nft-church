FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install --no-audit
COPY . .
RUN yarn run build

FROM nginx:1.25-alpine

# Копируем основной конфиг Nginx
COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

# Копируем конфиг приложения
COPY docker/nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf

# Копируем собранный фронтенд
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]