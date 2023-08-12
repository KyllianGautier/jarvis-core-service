FROM node:16
WORKDIR /usr/src/app
COPY /package*.json .
COPY /node_modules ./node_modules
COPY /dist ./dist
CMD ["npm", "run", "start:prod"]