FROM node:18-alpine AS baseImage 

FROM baseImage AS deps 
WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm install