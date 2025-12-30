# __#TEMPLATE#:DOMAIN__

Website created with [webserver-printer](https://github.com/shipurjan/webserver-printer).

## Development

```bash
cd frontend && npm run dev
```

## Deployment

Push to master branch - GitHub Actions will deploy automatically.

Or manually:

```bash
docker compose -f docker/docker-compose.yml up -d --build
```
