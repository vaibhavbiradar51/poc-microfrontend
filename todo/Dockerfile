FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app/todo
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9003
CMD [ "http-server", "-p 9003", "dist" ]