# Dockerfile

Until now, the course only showed how to use images that were already created. Now we will learn how build our own images.

![](images/01.png)

The dockerfile will serve as a parameter to docker client that will redirect the commands to Docker server execute and generate a image based on the informed commands

![](images/02.png)

The usual flow for a Docker file consists in informing a base image, run commands to install additional programs and then inform the commands that will execute the application as a whole. In the example below:

- Alpine was used as a bage image. Alpine is a minimal linux based image.
- A command to install redis was selected
- The command to run redis was informed inside the CMD command of the Dockerfile

```
# Uses existing docker image as a base
FROM alpine

# Download and install dependencies
RUN apk add --update redis

# Tell the image what to do when it starts as a container
CMD ["redis-server"]
```

Observation: The difference between RUN and CMD is that RUN specifies commands that must be executed in order to create de image and CMD specifies the commands when the container starts

# Explaining a little deeper

## What is a base image

When you receive a dockerfile, that is the same as receiving a empty computer with nothing installed on it

![](images/03.png)

And when we do receive such a empty computer, we want to execute a set of tasks that will prepare the computer to be able to execute some kind of purpose. Let's say we want a computer that is able to navigate on google chrome. So, the steps we must execute on our empty computer are as follows:

![](images/04.png)