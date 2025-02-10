# Build Stage
FROM node:18-alpine AS build
WORKDIR /app
COPY ["package.json", "yarn.lock*", "./"]
RUN yarn install
COPY . .
RUN npm run build
 
# Production Stage
FROM nginx:alpine

# Создаем директорию и меняем владельца
RUN mkdir -p /var/cache/nginx/client_temp && \
    chown -R nginx:nginx /var/cache/nginx

# Копируем конфигурацию и статические файлы
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html

# Запускаем от пользователя nginx
USER nginx

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]