FROM node:16

WORKDIR /app

ADD ./package*.json ./

RUN npm install

ADD . .

CMD npm start