FROM node:25-slim AS base
WORKDIR /app
RUN npm i -g vite
COPY package*.json ./
RUN npm i
COPY . .
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]