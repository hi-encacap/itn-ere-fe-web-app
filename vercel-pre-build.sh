#!/bin/bash

# Ignore Vercel build step if the the branch is not dev
if [[ $VERCEL_GIT_COMMIT_REF != "dev" ]]; then
  echo "🛑 - Build cancelled"
  exit 0

else 
  echo "✅ - Build can proceed"
  exit 1
fi