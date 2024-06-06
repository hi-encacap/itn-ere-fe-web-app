FROM oven/bun:1 AS base
WORKDIR /usr/src/app
COPY package.json bun.lockb next.config.js ./

FROM base AS dependences
RUN bun install

FROM base AS builder
COPY . .
COPY --from=dependences /usr/src/app/node_modules ./node_modules
RUN bun run build

FROM base AS production
ENV NODE_ENV=production
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/public ./public
CMD ["bun", "run", "start"]
