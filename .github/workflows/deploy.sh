#!/bin/bash
ssh deployer@172.17.0.2 <<EOF
    set -e # Faz o script falhar se algum comando falhar
    rm -rf meu_site_deploy
    mkdir -p meu_site_deploy

    unzip -o app.zip -d meu_site_deploy
    rm -rf /var/www/html/meu-site/*
    mv /var/www/html/meu-site/* /var/www/html/meu-site-backup/
    cp -r meu_site_deploy/* /var/www/html/meu-site/
EOF
