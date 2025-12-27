FROM node:24.12.0-alpine3.23 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy source and build
COPY . .
RUN npm run build

# Output stage - just copy dist to volume
FROM alpine:3.23
WORKDIR /dist
COPY --from=builder /app/dist ./
CMD ["tail", "-f", "/dev/null"]
