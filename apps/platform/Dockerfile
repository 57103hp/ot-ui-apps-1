FROM node:16 as build
# assert that a compatible yarn version is installed or fail
RUN case `yarn --version` in 1.22*) true;; *) false;; esac
COPY package.json yarn.lock /tmp/platform-app/
WORKDIR /tmp/platform-app/
RUN yarn
COPY . /tmp/platform-app/
RUN apt-get update && apt-get install -y git
ARG REACT_APP_REVISION=""
RUN : "${REACT_APP_REVISION:?Missing --build-arg REACT_APP_REVISION=\$(git rev-parse --short HEAD)}"
RUN yarn build
FROM node:16
RUN npm install -g serve
RUN yarn install
COPY . .
RUN yarn build


