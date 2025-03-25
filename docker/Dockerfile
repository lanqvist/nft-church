FROM node:18-alpine as builder
WORKDIR /app
COPY package*.json ./
RUN yarn install --no-audit
COPY . .
RUN yarn run build

FROM nginx:1.25-alpine
COPY --from=builder /dist /usr/share/nginx/html
COPY docker/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]