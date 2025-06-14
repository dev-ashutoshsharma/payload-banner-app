# Stage 1: Build
FROM node:16 AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Production
FROM node:16

WORKDIR /usr/src/app

# Copy only the necessary build artifacts from the builder
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/node_modules ./node_modules
COPY --from=builder /usr/src/app/dist ./dist

# Expose the port Payload runs on (usually 3000)
EXPOSE 3000

# Start the server
CMD ["npm", "run", "serve"]
