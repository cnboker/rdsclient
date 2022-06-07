#!/bin/bash
echo start before build
cd /Users/songscott/code/rdsclient/lib && npm run build && npm link
cd /Users/songscott/code/rdsclient/app && npm link lgservice

echo build fileService
# not support webpack
cd /Users/songscott/code/rdsclient/service/fileService && npm run build 
#cd /Users/scott/code/rdsclient/service/fileService && cp index.js package.json services.json ./dist 
