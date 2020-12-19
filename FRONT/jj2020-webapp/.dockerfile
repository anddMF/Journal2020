FROM node:12.7-alpine AS build

WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm i --force
COPY . .
RUN npm run build

FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/jj2020-webapp /usr/share/nginx/html

