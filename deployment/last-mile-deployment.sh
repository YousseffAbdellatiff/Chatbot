#!/bin/bash
set -e

# Load environment variables from .env
set -o allexport
source .env
set +o allexport

echo "[+] Logging into GitLab Container Registry..."
echo "$GITLAB_TOKEN" | docker login "$REGISTRY" -u "$GITLAB_USERNAME" --password-stdin

echo "[+] Pulling latest images..."
docker compose pull

echo "[+] Restarting containers..."
docker compose down
docker compose up -d

echo "[✓] Deployment complete."
