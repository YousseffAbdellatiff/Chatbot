FROM node:24-slim AS builder

WORKDIR /app

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@latest --activate && pnpm install; \
  elif [ -f yarn.lock ]; then \
    yarn install; \
  else \
    npm install; \
  fi

COPY . .
RUN npm run build

FROM node:24-slim AS runner

WORKDIR /app

ENV NODE_ENV=production

COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f pnpm-lock.yaml ]; then \
    corepack enable && corepack prepare pnpm@latest --activate && pnpm install --prod; \
  elif [ -f yarn.lock ]; then \
    yarn install --production; \
  else \
    npm install --omit=dev; \
  fi

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000

CMD ["npm", "start"]
