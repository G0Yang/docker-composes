FROM node:latest

MAINTAINER ender<ender35841@gmail.com>

#RUN apt-get update -y && apt-get install git nano vim tzdata -y

WORKDIR /blockchainWallet

COPY ./blockchainWallet /blockchainWallet/

RUN npm install -g pm2 node-gyp

RUN npm install

RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

EXPOSE 3000 3001 3002

CMD [ "pm2-runtime", "start", "ecosystem.config.js"]


