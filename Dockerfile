FROM node:lts as build-stage

WORKDIR /app
COPY package.json /app/

RUN npm install
COPY . /app/
RUN npm run build

FROM bitnami/nginx:latest AS prod

# COPY --from=build-stage /app/build /app
COPY --from=build-stage /app/build /usr/share/nginx/html
COPY nginx.conf /opt/bitnami/nginx/conf/nginx.conf

EXPOSE 8081

