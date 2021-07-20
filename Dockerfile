FROM node:14

RUN npm install --global yarn --force

WORKDIR /usr/src/frontend

COPY package.json /usr/src/frontend/

RUN yarn

EXPOSE 3002

CMD yarn dev