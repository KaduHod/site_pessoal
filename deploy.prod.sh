#!/bin/bash
ssh -t deployer <<EOF
    set -e # Faz o script falhar se algum comando falhar
    rm -rf meu_site_deploy
    mkdir -p meu_site_deploy
    mkdir -p /var/www/html/meu-site
    unzip -o app.zip -d meu_site_deploy
    ls -lah -tr meu_site_deploy
    rm -rf /var/www/html/meu-site/*
    echo "Movendo arquivos para o diretorio alvo do nginx"
    cp -r meu_site_deploy/* /var/www/html/meu-site/
EOF
