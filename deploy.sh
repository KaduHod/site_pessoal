#!/bin/bash
ssh -t deployer@172.17.0.2 <<EOF
    set -e # Faz o script falhar se algum comando falhar
    rm -rf meu_site_deploy
    mkdir -p meu_site_deploy
    mkdir -p /var/www/html/meu-site
    unzip -o app.zip -d meu_site_deploy
    ls -lah -tr mwu_site_deploy
    rm -rf /var/www/html/meu-site/*
    echo "Movendo arquivos para o diretorio alvo do nginx"
    cp -r meu_site_deploy/dist/* /var/www/html/meu-site/
EOF
