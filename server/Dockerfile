FROM node:24-slim AS builder

RUN npm install -g pnpm

WORKDIR /app

COPY pnpm-lock.yaml package.json ./
RUN pnpm install

COPY ./src ./src
COPY tsconfig.json ./
RUN pnpm run build


FROM node:24-slim AS production

ENV NODE_ENV=production
WORKDIR /app

RUN npm install -g pnpm

COPY pnpm-lock.yaml package.json ./
RUN pnpm install --prod

COPY --from=builder /app/dist ./dist

EXPOSE 3000
CMD ["node", "dist/server.js"]
