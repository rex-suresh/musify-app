#! /bin/bash

mkdir -p ./outputs
cp "./android/app/build/outputs/apk/prod/release/app-prod-release.apk" "./outputs/musify.apk"

echo -e "\n\n Copy the App into your device by running 'adb push ./outputs/musify.apk /storage/emulated/0/'"
