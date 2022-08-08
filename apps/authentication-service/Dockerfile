FROM node:16.15.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install --production

COPY ./dist/apps/authentication-service /app

EXPOSE 3000

CMD node main.js
