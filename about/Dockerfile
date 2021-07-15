FROM node:lts-alpine
RUN npm install -g http-server
WORKDIR /app/about
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 9001
CMD [ "http-server", "-p 9001", "dist" ]