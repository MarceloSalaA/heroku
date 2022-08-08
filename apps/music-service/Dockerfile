FROM node:16.15.0

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install --production

COPY ./dist/apps/music-service /app

EXPOSE 3001

CMD node main.js
