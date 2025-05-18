FROM node:23.11.1-alpine3.21
WORKDIR /
# RUN mkdir -p /www
# RUN mkdir -p /archive
# RUN mkdir -p /temp

COPY ./ ./
RUN npm install --only=prod --force
EXPOSE 3000
CMD [ "npm", "run", "start" ]