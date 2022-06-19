#!/bin/bash

echo start post build
#rm ./build/com.ioliz.dclient.app_1.0.0_all.ipk
ares-package /Users/songscott/code/rdsclient/testapp/build /Users/songscott/code/rdsclient/service/fileService/dist -o /Users/songscott/code/rdsclient/testapp/build 
#first remove old app
#ares-launch -d target com.ioliz.dc.app --close
#ares-install -r com.ioliz.dc.app -d target -v
#reinstall
ares-install --device target ./build/com.ioliz.dc.app_1.0.1_all.ipk  -v
ares-launch --device target com.ioliz.dc.app
ares-inspect --device target com.ioliz.dc.app