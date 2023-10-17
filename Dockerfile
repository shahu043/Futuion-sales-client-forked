# stage 1
FROM node:18.16.1 as node
WORKDIR /app
COPY . /app/
# COPY package*.json ./ -- redundant
RUN npm install -g @angular/cli
RUN npm install
RUN ng build

# stage 2
FROM nginx:alpine
COPY --from=node /app/dist/futuion-sales/ /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
