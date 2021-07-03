FROM node:12-buster
WORKDIR /src
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
CMD yarn knex:migrate && yarn dev