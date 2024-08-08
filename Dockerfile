FROM node:lts as build

WORKDIR /app
COPY package.json ./

RUN npm install
RUN npm run build

FROM bitnami/nginx:latest AS prod

COPY --from=build /app/build /app
COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf

EXPOSE 8081

