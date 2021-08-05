# build environment
FROM node:16.6-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
RUN npm install react-scripts@3.4.1 -g
COPY config ./config
COPY public ./public
COPY src ./src
RUN npm run build
COPY . ./

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
VOLUME /etc/letsencrypt/live /etc/letsencrypt/live/
VOLUME /var/lib/letsencrypt /var/lib/letsencrypt/
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
