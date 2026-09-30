# Builds the static site and serves it with nginx (used by Coolify).
FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
ARG SITE_URL=http://localhost
ARG BASE_PATH=/
RUN SITE_URL=$SITE_URL BASE_PATH=$BASE_PATH npm run build

FROM nginx:1.29-alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
