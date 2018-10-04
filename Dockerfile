FROM node:8.12.0-alpine as builder
WORKDIR /src
COPY package.json /src/package.json
RUN npm install
COPY . /src
RUN npm run build

FROM nginx:1.15.5-alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /src/dist /usr/share/nginx/html
