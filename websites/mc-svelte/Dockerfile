FROM node:16.15.1-alpine3.14

# add env variables
WORKDIR /app

COPY ./perform_ui/mc/ .

RUN npm ci

RUN npm run build

FROM node:16.15.1-alpine3.14

ARG COMMIT_REV_SHORT
LABEL org.opencontainers.image.revision=$COMMIT_REV_SHORT

WORKDIR /app

COPY --from=0 /app/package*.json ./

RUN npm ci --ignore-scripts

COPY --from=0 /app/build ./

EXPOSE 3000

CMD ["node", "index.js"]
