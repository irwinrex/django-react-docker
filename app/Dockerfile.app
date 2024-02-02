# Use an official Node.js runtime as a parent image
FROM node:20.11.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose port 3000 (or the port your app is listening on)
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]
