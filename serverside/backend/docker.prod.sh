docker build -f Dockerfile.prod -t backend . &
docker rm backend || true &
docker run -d --name backend -p 4000:4000 -t backend:latest