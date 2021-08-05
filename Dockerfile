# build environment
FROM node:16.6-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
# COPY package.json ./
# COPY package-lock.json ./
COPY . ./
RUN npm ci
RUN npm install react-scripts@3.4.1 -g
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
VOLUME nginx/nginx.conf /etc/nginx/conf.d/default.conf

# copy files needed for letsencrypt / certbot
# see: https://pentacent.medium.com/nginx-and-lets-encrypt-with-docker-in-less-than-5-minutes-b4b8a60d3a71
VOLUME certbot-etc /etc/letsencrypt
VOLUME certbot-var /var/lib/letsencrypt

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
