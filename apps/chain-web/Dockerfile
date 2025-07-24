# If you want to run only the chain-web app but the packages will not be present

FROM node:alpine

WORKDIR chain-app

COPY ./package.json .

RUN npm i -g bun

RUN bun install

COPY . .

RUN bun run build

CMD ["bun", "run", "start"]