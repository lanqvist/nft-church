#!/bin/bash

NGINX_CONF_FILE="/etc/nginx/conf.d/frontend.conf"
SERVER_NAME="87.242.118.221"  # Explicitly set the VM IP
FRONTEND_PORT="80"           # VERY IMPORTANT: Port the app LISTENS ON inside the container

echo "Creating Nginx configuration file: $NGINX_CONF_FILE"
cat <<EOF | sudo tee "$NGINX_CONF_FILE"
server {
    listen 80;
    server_name $SERVER_NAME;

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
if [ $? -ne 0 ]; then
  echo "Nginx configuration test failed. Aborting."
  exit 1
fi

echo "Reloading Nginx..."
sudo systemctl reload nginx
if [ $? -ne 0 ]; then
  echo "Nginx reload failed. Check logs for errors."
  exit 1
fi

echo "Nginx setup complete."