#!/bin/bash
ssh deployer@172.17.0.2 <<EOF
    set -e  # Faz o script falhar se algum comando falhar
    echo "O q ta aconteceno"
    sudo apt-get update
    sudo apt-get install -y unzip

    rm -rf meu_site_deploy
    mkdir -p meu_site_deploy

    unzip app.zip -d meu_site_deploy
    cp -r meu_site_deploy/* /var/www/html/meu-site/
EOF
