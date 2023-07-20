# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json (if available)
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the entire React app to the container's working directory
COPY . .

# Expose the port that the React app will run on
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
