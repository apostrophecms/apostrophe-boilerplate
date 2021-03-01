FROM node:14
ENV APOS_MINIFY=1
ENV NODE_ENV=production
WORKDIR /app
COPY package* ./
RUN npm ci
RUN mkdir scripts
# Use "m" to temporarily install mongod in a lightweight way so
# the asset build task does not encounter problems initializing modules
# that expect a database. We do not actually need this database in the
# container, so uninstall it at the end
RUN npm install -g m
RUN apt-get -y update
RUN apt-get -y install scons
RUN m 3.6
RUN m tools stable
RUN npm install -g pm2
COPY . ./
RUN ./scripts/docker-build-assets-with-temporary-mongod
RUN m rm 3.6
EXPOSE 3000
ENTRYPOINT [ "./scripts/docker-wait-for-port", "mongo:27017", "--" ]
# Load balance at least 2 copies
CMD ["pm2-runtime", "-i", "2", "start", "app.js" ]
