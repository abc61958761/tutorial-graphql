FROM node:12.13-alpine As development

WORKDIR /app
COPY package.json yarn.lock ./

COPY . .
EXPOSE 3000
CMD ["yarn", "start:dev"]