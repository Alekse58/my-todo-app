FROM node:18 AS build-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:18 AS dev-stage

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
CMD ["npm", "run", "dev"]


FROM nginx:1.21 AS prod-stage

COPY --from=build-stage /app/build /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
