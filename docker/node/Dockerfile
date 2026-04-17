FROM node:20
LABEL maintainer="amog"

WORKDIR app

COPY config/node/frontend/package.json .
RUN npm install

COPY config/node/frontend .

ENV C1=false

CMD ["npm", "start"]