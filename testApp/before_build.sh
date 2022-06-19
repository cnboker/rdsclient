#!/bin/bash
echo start before build
cd /Users/songscott/code/rdsclient/lib&&npm run build
cd /Users/songscott/code/rdsclient/testApp &&npm link lgservice

echo build fileService
# not support webpack
cd /Users/songscott/code/rdsclient/service/fileService && npm run build 
