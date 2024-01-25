# BASIC DJANGO APP

[![Build status](https://ci.appveyor.com/api/projects/status/m07cnunnni8w82o5?svg=true)](https://github.com/codeplays/devops.git)

## Features
- DOCKER COMPOSE 
- DOCKER SWARM 
- NGINX 
- UWSGI
- KUBERNETES

This Repo Contains Dockerfiles and Kubernetes Files

## Linux

## --> Docker Run
```
git clone https://github.com/codeplays/devops.git
cd devops
docker build -t dj:latest .
docker run -p 7000:7000 -d dj:latest
curl -L localhost:7000/home
docker rm -f <container-name> 
```
This is a simple docker,uwsgi and django deployment application is running on 7000 port

## --> Docker Compose #

```
git clone https://github.com/codeplays/devops.git
cd devops/dockerfiles
docker compose up -d --build
```

```
docker compose build --no-cache
docker compose up -d
curl -L localhost/home
docker compose down
```

This is a docker,uwsgi,nginx and django deployment application is running on 80 port

note : 

# --> Docker Swarm #

```
git clone https://github.com/codeplays/devops.git
cd devops
docker build -t dj:latest .
docker build -t djnginx:latest -f Dockerfile.nginx
docker swarm init
docker stack deploy -c dockerfiles/swarm.yml myapp
curl -L localhost/home
docker stack rm myapp
```
This is a docker swarm deployemnt. it contains docker,uwsgi,nginx and django. The application is running on 80 port.but it have 2 replicas. even though you remove containers forcefully it will regenerate in a instance. it have healthcheck path , rollback feature, blue green deployemnt also.

for the next build : 
```docker service update --image dj:new --force myapp_api```

## Kubernetes

Loading...😉

You're Friendly DevOps
