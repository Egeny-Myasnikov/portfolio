#!/bin/bash
set -e

echo "Starting deployment..."

cd /root/portfolio

echo "Cleaning up Docker system..."
docker system prune -f
docker volume prune -f

echo "Pulling latest changes..."
git fetch origin
git reset --hard origin/main

echo "Building Docker images..."
docker compose -f docker-compose.prod.yml build --no-cache

echo "Restarting containers..."
docker compose -f docker-compose.prod.yml down
docker compose -f docker-compose.prod.yml up -d

echo "Deployment completed!"