FROM node:alpine as build

WORKDIR /usr/app/

COPY package*.json ./
COPY tsconfig.json ./
RUN npm install --silent

COPY index.ts ./
RUN npm run build

ARG IMAGE_COLOR
ENV IMAGE_COLOR=${IMAGE_COLOR}

CMD [ "npm", "start" ]




