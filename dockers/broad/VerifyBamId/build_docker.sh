#!/usr/bin/env bash

DIR="$( cd "$( dirname "$0" )" && pwd )"

VERIFY_BAM_ID_COMMIT="f6cb51761861e57c43879aa262df5cf8e670cf7c"
TIMESTAMP=$(date +"%s")
DOCKER_TAG="$VERIFY_BAM_ID_COMMIT-$TIMESTAMP"

docker build -t us.gcr.io/broad-gotc-prod/verify-bam-id:${DOCKER_TAG} --build-arg GIT_HASH="$VERIFY_BAM_ID_COMMIT" "$DIR"
docker push us.gcr.io/broad-gotc-prod/verify-bam-id:${DOCKER_TAG}
