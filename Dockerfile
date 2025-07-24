FROM node:alpine

WORKDIR chainexplorer

COPY . .

RUN npm i -g bun

RUN bun install

CMD ["bun", "run", "dev"]