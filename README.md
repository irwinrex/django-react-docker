<center>
<table>
  <tr>
    <td align="center"><a href="README.md"><img src="images/devops.png" width="150px;" height="150px;" alt="DevOps" /><br /><b>DevOps</b></a></td>
  </tr>
</table>
</center>

<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/linux.png" width="170px;" height="100px;" alt="linux" /><br /><b></b></a></td>
    <td align="left"><a href="README.md"><img src="images/docker.png" width="180px;" height="100px;" alt="docker" /><br /><b></b></a></td>
    <td align="left"><a href="README.md"><img src="images/docker-compose.png" width="100px;" height="120px;" alt="compose" /><br/><b></b></td>
    <td align="left"><a href="README.md"><img src="images/helm.png" width="100px;" height="100px;" alt="helm" /><br /><b></b></a>
    <td align="left"><a href="README.md"><img src="images/swarm.png" width="120px;" height="100px;" alt="DOCKER SWARM" /><br /><b></b></a></td>
    <td align="left"><a href="README.md"><img src="images/kubernetes.png" width="100px;" height="100px;" alt="KUBERNETES" /><br /><b></b></a></td>
  </tr>
</table>

## Features
- DOCKER COMPOSE 
- DOCKER SWARM 
- NGINX 
- UWSGI
- KUBERNETES
- REACT APP

## Docker Commands

```
git clone https://github.com/codeplays/devops.git
cd devops
docker build -t dj:latest .
docker run -p 7000:7000 -d dj:latest
curl -L localhost:7000/home
docker rm -f <container-name> 
```
This is a simple docker,uwsgi and django deployment application is running on 7000 port


## Docker Compose Commands

```
git clone https://github.com/codeplays/devops.git
cd devops/dockerfiles
docker compose up -d --build
```

```
docker compose build --no-cache
docker compose up -d
curl -L localhost/home
http://localhost:3000
docker compose down
```

This is a docker,uwsgi,nginx and django deployment application is running on 80 port

## Docker Swarm Commands

```
git clone https://github.com/codeplays/devops.git
cd devops
docker build -t dj:latest .
docker build -t djnginx:latest -f Dockerfile.nginx
cd app
docker build -t djapp:latest -f Dockerfile.app
docker swarm init
docker stack deploy -c dockerfiles/swarm.yml myapp
curl -L localhost/home
http://localhost:3000
docker stack rm myapp
```
This is a docker swarm deployemnt. it contains docker,uwsgi,nginx and django. The application is running on 80 port.but it have 2 replicas. even though you remove containers forcefully it will regenerate in a instance. it have healthcheck path , rollback feature, blue green deployemnt also.

for the next build : 
```docker service update --image dj:new --force myapp_name```

## Kubernetes Commands

k8 : minikube

```
git clone https://github.com/codeplays/devops.git
cd devops
minikube start
eval $(minikube docker-env)
docker build -t dj:latest . --no-cache
kubectl apply -f kubernetes/deployment.yml
kubectl apply -f kubernetes/service.yml
kubectl apply -f kubernetes/ingress.yml
minikube addon enable ingress
kubectl get pod -n ingress-nginx
kubectl get pod -A | grep nginx --> check the container is running
kubectl get ingress --> copy the address
sudo nano /etc/hosts --> paste it and name it foo.bar.com (domain mapping in local)
curl -L http://foo.bar.com
```

## Try Logging in 

React App : NodeJs

```
https:localhost:3000
uname : playcode
password : playcode
```
note : Only works for docker swarm deployment and docker compose deployment
soon will be available in kubernetes

You're Friendly DevOps
