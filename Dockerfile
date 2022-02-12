FROM node:16.13.2-alpine3.14 as node

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build
FROM nginx:latest
COPY --from=node /app/dist/main-project /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf
