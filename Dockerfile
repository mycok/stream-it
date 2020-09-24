FROM node:14.0.0
RUN mkdir -p /usr/
WORKDIR /usr/
COPY package.json /usr/
RUN yarn install
COPY . /usr/
EXPOSE 3000
CMD ["yarn", "start"]
