<center>
<table>
  <tr>
    <td align="center"><a href="README.md"><img src="images/devops.png" width="200px;" height="200px;" alt="DevOps" /><br /><b>DevOps</b></a></td>
  </tr>
</table>
</center>

# BASIC DJANGO APP

[![Build status](https://ci.appveyor.com/api/projects/status/m07cnunnni8w82o5?svg=true)](https://github.com/codeplays/devops.git)

## Features
- DOCKER COMPOSE 
- DOCKER SWARM 
- NGINX 
- UWSGI
- KUBERNETES

This Repo Contains Dockerfiles and Kubernetes Files

## Linux Commands

<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/docker.png" width="300px;" height="100px;" alt="docker" /><br /><b>DOCKER COMMANDS</b></a></td>
  </tr>
</table>

```
git clone https://github.com/codeplays/devops.git
cd devops
docker build -t dj:latest .
docker run -p 7000:7000 -d dj:latest
curl -L localhost:7000/home
docker rm -f <container-name> 
```
This is a simple docker,uwsgi and django deployment application is running on 7000 port

<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/docker-compose.png" width="100px;" height="120px;" alt="compose" /><br /><b>DOCKER COMPOSE COMMANDS</b></a></td>
  </tr>
</table>

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



<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/swarm.png" width="100px;" height="90px;" alt="DOCKER SWARM" /><br /><b>DOCKER SWARM COMMANDS</b></a></td>
  </tr>
</table>


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

<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/kubernetes.png" width="100px;" height="100px;" alt="KUBERNETES" /><br /><b>KUBERNETES COMMANDS</b></a></td>
  </tr>
</table>

k8 : minikube

```
cd /devops
minikube start
eval $(minikube docker-env)
docker build -t dj:latest . --no-cache
kubectl apply -f kubernetes/deployment.yml
kubectl apply -f kubernetes/service.yml
```
Loading...😉

You're Friendly DevOps
