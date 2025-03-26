#!/bin/bash

NGINX_CONF_FILE="/etc/nginx/conf.d/frontend.conf"
SERVER_NAME="yourdomain.com"  # Замените на свой домен или оставьте IP ВМ
VM_IP="87.242.118.221"      # Замените на IP своей ВМ
FRONTEND_PORT="3000"           # Порт, который фронтенд "выставляет" из контейнера

echo "Creating Nginx configuration file: $NGINX_CONF_FILE"
cat <<EOF | sudo tee "$NGINX_CONF_FILE"
server {
    listen 80;
    server_name $SERVER_NAME $VM_IP;
    location / {
        proxy_pass http://localhost:$FRONTEND_PORT;
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
    }
    # Optional: Serve static files from a specific directory, if needed
    # location /static/ {
    #     alias /path/to/static/files/;
    #     expires 30d;
    # }
}
EOF

echo "Checking Nginx configuration..."
sudo nginx -t

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Nginx setup complete."