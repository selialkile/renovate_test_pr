#!/bin/bash
source token.env

docker run -v /var/run/docker.sock:/var/run/docker.sock \
           -v "$(pwd)/config.js:/usr/src/app/config.js" \
           --rm --privileged -it --user root \
           renovate/renovate:latest renovate --dry-run --token $TOKEN $(cat ./repositories.txt)