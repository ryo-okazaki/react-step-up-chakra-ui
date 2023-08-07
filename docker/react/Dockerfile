FROM node:18-alpine3.17

WORKDIR /app

COPY ./react/package.json ./
COPY ./react/package-lock.json ./

RUN npm install

EXPOSE 8080

CMD [ "npm", "run", "dev" ]