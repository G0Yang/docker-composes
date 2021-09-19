FROM node:alpine

MAINTAINER ender<ender35841@gmail.com>

RUN apt-get update -y && apt-get install git nano vim tzdata -y

WORKDIR /wallet

CP ./blockchainWallet /blockchainWallet/

RUN npm install -g pm2 node-gyp

RUN npm install

RUN ln -sf /usr/share/zoneinfo/Asia/Seoul /etc/localtime

EXPOSE 80 443 8080

CMD [ "pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]


