#!/bin/bash
ssh deployer@172.17.0.2 <<EOF
    mkir -p meu_site_deploy
    ls -lah | grep meu_site
    unzip app.zip -d meu_site_deploy
    cp -r meu_site_deploy/* /var/www/html/meu-site/
EOF
