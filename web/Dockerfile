FROM node:21-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --force

COPY . .

CMD ["npm", "run", "dev"]
