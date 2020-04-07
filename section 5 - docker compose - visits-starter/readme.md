# Docker Compose

## Introduction

So.. what if I want to run 2 containers that will interact with each other, such as: nodeJs and redis. What can I do? Can I start both containers separately and have them interacting via HTTP? Absolutely. The problem is, the containers will not be able to "see one another", because they are working on different containers with different networks.

We can configure the network for them. In this case, they will be able to "see each other" and then work together. The problem is that to do so you have to deal with a bunch of configuration. ORRR use docker compose!

Docker-compose is a command that embeddeds a bunch o  configuration for running multiple containers. It creates the network between the containers and starts them all simultaneosly.

## docker-compose.yml

version: '3'
services:
  redis-server:
    image: 'redis'
  node-app:
    build: .
    ports:
      - "4001:8081" 

In the docker compose above we can see a redis server being started and a nodeJs application (inside a container with Dockerfile) being started. "services" represent the containers, which have its names. Redis-server is the container resulted from the execution of redis image, and the node-app container is the result of the execution of the command build for the local folder location (represented by ".")

## Exection

To execute the docker compose, you have to use the commands

> docker-compose up --build

which works the same as

> docker build . & docker run myimage

If you only run docker-compose up, it's not going to rebuild the images. So if you have any modification that requires nodeJs to be rebuilt (like a new dependency or modifying a controller) it will necessary to add "--build" at the end of the command. 

## Other useful commands

> docker-compose up -d

Starts containers in background, without the terminal listening to them.

> docker-compose down

Stops all docker-compose running commands

## Maintenance and Restart Policies

We added two lines to our nodeJs controller, which were

const process = require('process');

process.exit(0);

the second one stops the nodejs server with status error 0. Thats important. But firstly, lets talk about the restart policies existent:

![System and container port](images/restart-policies.png)

Those policies means whether or not docker should try to restart containers when they get terminated for some reason. The default value is "no", so if your containers runs out, docker will not try to restart it. The second possbile type is 'always' and thats quite the opposite of the first, whenever a container with this type of restart crashes, docker will try to run it again. To do so, you do the following configuration:

![System and container port](images/docker-compose-file-restart.png)

The third option has a tiny rule, if your exit error code returns zero, it will not try to restart the container. And that's because the exit error code 0 means the application was stopped due to a rule that does not mean a unknown error, it was on purpose. Any other code returned, 1 to 1000, will trigger container restart. And the last one is that the container can only be stopped by command line (?)

