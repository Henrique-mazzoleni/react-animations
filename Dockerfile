FROM node:lts-alpine
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY next.config.js ./next.config.js

COPY components ./components
COPY pages ./pages
COPY styles ./styles
COPY public ./public

CMD ["npm", "run", "dev"]