#!/bin/bash

for VARIABLE in questions resources
do
  npx @openapitools/openapi-generator-cli generate -g typescript-angular -i src/openapi/$VARIABLE.yaml -o src/app/openapi/$VARIABLE
done