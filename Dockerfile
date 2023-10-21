FROM node:16.18.0

WORKDIR /usr/src/app

#Add environmental variables
ARG DATABASE_URL

ENV DATABASE_URL $DATABASE_URL

COPY package*.json ./
RUN npm install

COPY . .
EXPOSE 8080
CMD ["npm", "start"]