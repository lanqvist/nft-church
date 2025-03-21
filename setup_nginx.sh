#!/bin/bash

NGINX_CONF_FILE="/etc/nginx/conf.d/frontend.conf"
SERVER_NAME="yourdomain.com" # Replace with your domain or VM IP
VM_IP="<ваш_ip_адрес_вм>"

echo "Creating Nginx configuration file: $NGINX_CONF_FILE"
cat <<EOF | sudo tee "$NGINX_CONF_FILE"
server {
    listen 80;
    server_name $SERVER_NAME $VM_IP;

    root /usr/share/nginx/html; # Directory where the frontend files are located
    index index.html index.htm;

    location / {
        try_files \$uri \$uri/ =404;
    }
}
EOF

echo "Checking Nginx configuration..."
sudo nginx -t

echo "Reloading Nginx..."
sudo systemctl reload nginx

echo "Nginx setup complete."