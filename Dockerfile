# Use Node.js as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /jara_wadia_site

# Cache and Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy app files
COPY . .

# Set environment variable to configure the port
ENV PORT=5575

# Expose port 5575 for React
EXPOSE 5575

# Start the app
CMD ["sh", "-c", "PORT=5575 yarn start"]
