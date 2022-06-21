#!/bin/bash

MODE=""
while getopts 'pt' opt; do
    case "$opt" in
    p)
        MODE="prod"
        ;;
    t)
        MODE="test"
        ;;
    esac
done

echo $MODE
if [ -z "$MODE" ]; then
    exit 1
fi

compose="docker-compose.${MODE}.yml"
docker-compose -f $compose down -v || true
docker-compose -p $MODE -f $compose up -d --build