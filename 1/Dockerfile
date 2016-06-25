FROM ubuntu

RUN apt-get update -y
RUN apt-get install nodejs npm -y

RUN mkdir -p /app

ADD ./src-app/ /app/

WORKDIR /app

RUN npm install

CMD ["nodejs", "sv.js"]

EXPOSE 3000
