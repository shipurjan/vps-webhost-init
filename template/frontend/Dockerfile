FROM node:24.11.1-alpine3.23
RUN npm install -g http-server && \
    apk add --no-cache wget
WORKDIR /app
COPY index.html .
EXPOSE 3000
CMD ["http-server", "-p", "3000"]
