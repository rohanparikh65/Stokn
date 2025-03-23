FROM node:18

WORKDIR /app

COPY . .

# Rename .env.production to .env inside container
RUN cp .env.production .env

RUN npm install
RUN npm run build

EXPOSE 5001

CMD ["npm", "start"]
