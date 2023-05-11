#!/bin/bash

# Ignore Vercel build step if the the branch is not main or stg
if [[ $VERCEL_GIT_COMMIT_REF != "main" && $VERCEL_GIT_COMMIT_REF != "stg" ]]; then
  echo "🛑 - Build cancelled"
  exit 0
fi