FROM node:12-slim

# Install app dependencies.
COPY package.json /src/package.json
WORKDIR /src
RUN npm install

# Bundle app source.
COPY sentinelbot.js /src

CMD ["node", "sentinelbot"]
