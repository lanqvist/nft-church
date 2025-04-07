Поднятие бэкенда, фронтенда и nginx
```
sudo docker compose up --build
sudo docker exec nft-church-nginx-1 nginx -s reload 
sudo docker exec -it nft-church-nginx-1 sh  |  nginx -T | grep -A50 mjs
sudo docker exec -it nft-church-frontend-1 sh
```
