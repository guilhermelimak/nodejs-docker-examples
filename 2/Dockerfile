FROM ubuntu

RUN apt-get update -y
RUN apt-get install nodejs npm -y

RUN mkdir -p /app

ADD ./src-app/package.json /app/package.json

WORKDIR /app

RUN npm install

EXPOSE 3000
