#!/bin/bash

for VARIABLE in news/news manage/sources
do
  npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/proto/$VARIABLE.swagger.json -o src/openapi/$VARIABLE
done