#!/bin/bash

tar czf portfolio.tar.gz emailer public src package.json package-lock.json server.js 
scp portfolio.tar.gz pega:~
rm portfolio.tar.gz

ssh pega << 'ENDSSH'
pm2 stop portfolio
rm -rf portfolio-react
mkdir portfolio-react
tar xf portfolio.tar.gz -C portfolio-react
rm portfolio.tar.gz
cd portfolio-react
npm install
npm run build
pm2 start portfolio
ENDSSH