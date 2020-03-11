# Dockerfile for simple node project

We intended to make a simple node project and run it on a docker container. So we created a package.json and a index.js that would be executed inside the container. The problem is the Dockerfile:

## Dockerfile
### First version

Initially we tried

```
FROM alpine

RUN npm install

CMD ["npm", "start"]
```

It fails, because the alpine base image doesn't have npm installled.

### Second version

Then we tried the following

```
FROM node:alpine

RUN npm install

CMD ["npm", "start"]
```

And it almost got there. But npm complained our project didn't have the package.json file. And that's because the files that are "docker build ." are not automatically visible inside the container. There is a command to make it work work work (dararirara dãr dãr dãr)

![Container file system](images/filesystem-no-package.png)

As we can see. The container is started only with a base file system, which does not contain the files in your Dockerfile directory by default. They need to be added.

### Third version madafaka

