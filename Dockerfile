FROM node:latest

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app/

WORKDIR /app/

# Start the app
CMD ["npm", "run", "prod"]
