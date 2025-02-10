FROM node:lts-alpine
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "yarn.lock*", "./"]

RUN yarn install
COPY . .

EXPOSE 8080
RUN chown -R node /usr/src/app
USER node

CMD ["npm", "dev"]

# # Build Stage
# FROM node:18-alpine AS build
# WORKDIR /app
# COPY ["package.json", "yarn.lock*", "./"]
# RUN yarn install
# COPY . .
# RUN npm run build
 
# # Production Stage
# FROM nginx:stable-alpine AS production
# COPY --from=build /app/build /usr/share/nginx/html
# EXPOSE 8080
# CMD ["nginx", "-g", "daemon off;"]