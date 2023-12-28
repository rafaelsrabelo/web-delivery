FROM node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "run", "start" ]