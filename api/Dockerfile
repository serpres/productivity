FROM node:21-alpine

WORKDIR /app/api

COPY package*.json ./
RUN npm install

COPY . .

CMD ["npm", "run", "start:dev"]
