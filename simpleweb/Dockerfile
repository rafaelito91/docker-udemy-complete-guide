
#FROM alpine

#RUN apk add --update npm
#RUN npm install

#CMD ["npm", "start"]


# The method above can kinda work. But the below one is better:

# When you're selecting an image, you can select its alpine version
# that means it's a stripped down version of the image. It contains only
# the necessary. In this case it does contain npm

FROM node:alpine

RUN npm install

CMD ["npm", "start"]