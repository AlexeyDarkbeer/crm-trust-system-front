FROM node:18 AS build

WORKDIR /usr/src/app

RUN npm install -g @angular/cli@16

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

FROM nginx:latest

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/crm-trust-system-front /usr/share/nginx/html

EXPOSE 80
