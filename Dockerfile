FROM node:24-slim AS development

WORKDIR /app

RUN npm i -g vite

COPY package*.json                    ./
COPY packages/web/package*.json       ./packages/web/
COPY packages/native/package*.json    ./packages/native

RUN npm i

COPY packages/web/      ./packages/web/
COPY packages/native/   ./packages/native/