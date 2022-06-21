FROM node:16-alpine3.14 AS build

WORKDIR /hml-react
ENV PATH /hml-react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build

FROM nginx:latest
COPY --from=build /hml-react/build /usr/share/nginx/html
COPY --from=build /hml-react/nginx/nginx.conf /etc/nginx/conf.d/default.c
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
