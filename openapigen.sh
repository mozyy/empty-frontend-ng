#!/bin/bash

for VARIABLE in questions
do
  npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/openapi/$VARIABLE.json -o src/app/openapi/$VARIABLE
done