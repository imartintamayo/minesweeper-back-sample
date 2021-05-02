FROM node:14.16.0
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install -g npm
RUN npm install
RUN npm run clean
RUN npm run build
CMD [ "npm", "run", "start" ]