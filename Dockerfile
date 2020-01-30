FROM node:13-alpine

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

ENV HOME=/app

WORKDIR $HOME

COPY ./src .
COPY ./web/build ./public
COPY package.json .
COPY yarn.lock .
COPY tsconfig.json .

EXPOSE ${PORT}

RUN ls

RUN yarn run init

USER node

ENTRYPOINT ["ts-node"]

CMD ["index.ts"]
