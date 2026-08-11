FROM node:24-slim AS development

WORKDIR /app

RUN npm i -g vite

COPY package*.json                    ./
COPY packages/web/package*.json       ./packages/web/
COPY packages/native/package*.json    ./packages/native/
COPY packages/icons/package*.json     ./packages/icons/
COPY packages/core/package*.json      ./packages/core/

RUN npm i

COPY packages/web/      ./packages/web/
COPY packages/native/   ./packages/native/
COPY packages/icons/    ./packages/icons/
COPY packages/core/     ./packages/core/
