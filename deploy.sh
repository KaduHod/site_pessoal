#!/bin/bash

ssh deployer@172.17.0.2 <<EOF
    unzip app.zip -d meu_site_deploy
    cp -r meu_site_deploy/* /var/www/html/meu-site/
EOF
