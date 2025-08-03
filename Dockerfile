FROM node:20-alpine AS base

WORKDIR /app

RUN corepack enable
EXPOSE 20100


FROM base AS dependencies

COPY package.json ./
COPY yarn.lock ./
COPY .yarnrc.yml ./

RUN yarn install --immutable


FROM dependencies AS builder

COPY ./src ./src
COPY ./public ./public
COPY ./.yarnrc.yml next.config.js postcss.config.js tailwind.config.js tsconfig.json ./

RUN yarn run build

FROM dependencies AS production

ENV NODE_ENV=production

COPY --from=builder /app .
