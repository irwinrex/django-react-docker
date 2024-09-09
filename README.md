# **LOGIN APP**

<table>
  <tr>
    <td align="left"><a href="README.md"><img src="images/linux.png" width="170px;" height="100px;" alt="linux" /><br /><b></b></a></td>
    <td align="left"><a href="README.md"><img src="images/docker.png" width="180px;" height="100px;" alt="docker" /><br /><b></b></a></td>
    <td align="left"><a href="README.md"><img src="images/docker-compose.png" width="100px;" height="120px;" alt="compose" /><br/><b></b></td>
    <td align="left"><a href="README.md"><img src="images/swarm.png" width="120px;" height="100px;" alt="DOCKER SWARM" /><br /><b></b></a></td>
</table>

## Features
- DOCKER COMPOSE 
- DOCKER SWARM 
- NGINX 
- UWSGI
- REACT APP

# USE LINUX ( UBUNTU )

## Docker Commands
```
git clone https://github.com/irwinrex/django-react-docker.git
cd django-react-docker
docker build -t dj:latest .
docker run -p 7000:7000 -d dj:latest
curl -L localhost:7000/home
docker rm -f <container-name> 
```
This is a simple docker,uwsgi-django application is running on 7000 port



## Docker Compose Commands

```
git clone https://github.com/irwinrex/django-react-docker.git
cp django/config/secrets_template.json django/config/secrets.json
cd django-react-docker/dockerfiles
docker compose up -d --build
```

```
cp django/config/secrets_template.json django/config/secrets.json
docker compose build --no-cache
docker compose up -d
curl -L localhost:8000/home
http://localhost
docker compose down
```

This is a simple docker,uwsgi-django with react app application is running on 80 and 8000 port

Username & Password : test & test ( change the secrets.json for fun )

## Docker Swarm Commands

```
git clone https://github.com/irwinrex/django-react-docker.git
cp django/config/secrets_template.json django/config/secrets.json
cd django-react-docker
docker pull dockerrexxzz/dj:login
docker pull dockerrexxzz/reactapp:latest
docker pull dockerrexxzz/djnginx:latest
docker swarm init
docker stack deploy -c dockerfiles/swarm.yml myapp
curl -L localhost:8000/home
http://localhost
```
This is a docker swarm deployemnt. it contains docker,uwsgi,nginx,django and react app. The application is running on 80 port.but it have 2 replicas. even though you remove containers forcefully it will regenerate in a instance. it have healthcheck path , rollback feature, blue green deployemnt also.

for the next build : 
```
docker service update --image dj:new --force myapp_name
```

