FROM ubuntu

RUN apt-get update -y
RUN apt-get install nodejs npm -y

RUN mkdir -p /app

ADD ./src-app/package.json /app/package.json

WORKDIR /app

RUN npm install

CMD ["nodejs", "sv.js"]

EXPOSE 3000
