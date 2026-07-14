FROM node:24-slim AS development

WORKDIR /app

RUN npm i -g vite

COPY package*.json                    ./
COPY apps/uikit-react/package*.json   ./apps/uikit-react/

RUN npm i

COPY apps/uikit-react/  ./apps/uikit-react/

EXPOSE 3001