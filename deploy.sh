#!/bin/bash
set -e

# Load environment variables from .env
set -o allexport
source .env
set +o allexport


echo "[+] Building images..."
docker compose build

echo "[+] Logging into GitLab Container Registry $REGISTRY..."
echo "$GITLAB_TOKEN" | docker login "$REGISTRY" -u "$GITLAB_USERNAME" --password-stdin

echo "[+] Pushing images to GitLab Container Registry..."
docker compose push

echo "[+] SSH into the server..."
ssh -i infra/keys/MS-Ubuntu.pem "$SERVER_USER"@"$SERVER_IP" << EOF
  echo "[+] CD into deployment directory..."
  cd deployment

  echo "[+] Running last mile deploy script..."
  ./last-mile-deployment.sh
EOF

echo "[+] Deployment completed successfully!"