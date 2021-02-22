FROM node:12
WORKDIR /app
COPY package.json /app
COPY package-lock.json /app
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
# Load balance at least 2 copies
RUN npm install -g pm2
COPY . /app
ENV APOS_MINIFY=1
ENV NODE_ENV=production
RUN ./scripts/docker-build-assets-with-temporary-mongod
RUN m rm 3.6
EXPOSE 3000
CMD ./scripts/docker-start
