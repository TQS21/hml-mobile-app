FROM node:16-alpine3.14 AS build

WORKDIR /hml-react
ENV PATH /hml-react/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci
COPY . ./
RUN npm run build
CMD ["npm", "run", "start"]

