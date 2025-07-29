# 🚀 Deploy Radio Eklesia no VPS

## ✅ Passos Concluídos:
- [x] Código enviado para GitHub
- [x] Build de produção gerado
- [x] Arquivo compactado criado

## 📋 Próximos Passos - Deploy no VPS:

### 1. Upload do arquivo para o VPS
```bash
# No seu computador local, faça upload do arquivo para o VPS:
scp radio-eklesia-build.tar.gz root@173.224.125.126:/tmp/
```

### 2. Conectar no VPS
```bash
ssh root@173.224.125.126
```

### 3. No VPS, criar diretórios e extrair
```bash
# Criar diretório do site
sudo mkdir -p /var/www/radio.eklesia.app.br

# Extrair arquivos
sudo tar -xzf /tmp/radio-eklesia-build.tar.gz -C /var/www/radio.eklesia.app.br/

# Definir permissões
sudo chown -R www-data:www-data /var/www/radio.eklesia.app.br
sudo chmod -R 755 /var/www/radio.eklesia.app.br
```

### 4. Configurar Apache/Nginx

#### Para Apache (`/etc/apache2/sites-available/radio.eklesia.app.br.conf`):
```apache
<VirtualHost *:80>
    ServerName radio.eklesia.app.br
    ServerAlias www.radio.eklesia.app.br
    DocumentRoot /var/www/radio.eklesia.app.br
    
    <Directory /var/www/radio.eklesia.app.br>
        Options -Indexes +FollowSymLinks
        AllowOverride All
        Require all granted
        
        # SPA fallback para React Router (se usar no futuro)
        FallbackResource /index.html
    </Directory>
    
    # Compressão para melhor performance
    <IfModule mod_deflate.c>
        AddOutputFilterByType DEFLATE text/plain
        AddOutputFilterByType DEFLATE text/html
        AddOutputFilterByType DEFLATE text/xml
        AddOutputFilterByType DEFLATE text/css
        AddOutputFilterByType DEFLATE application/xml
        AddOutputFilterByType DEFLATE application/xhtml+xml
        AddOutputFilterByType DEFLATE application/rss+xml
        AddOutputFilterByType DEFLATE application/javascript
        AddOutputFilterByType DEFLATE application/x-javascript
    </IfModule>
    
    ErrorLog ${APACHE_LOG_DIR}/radio.eklesia.app.br_error.log
    CustomLog ${APACHE_LOG_DIR}/radio.eklesia.app.br_access.log combined
</VirtualHost>
```

#### Para Nginx (`/etc/nginx/sites-available/radio.eklesia.app.br`):
```nginx
server {
    listen 80;
    server_name radio.eklesia.app.br www.radio.eklesia.app.br;
    
    root /var/www/radio.eklesia.app.br;
    index index.html;
    
    # Compressão
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA fallback
    location / {
        try_files $uri $uri/ /index.html;
    }
    
    access_log /var/log/nginx/radio.eklesia.app.br_access.log;
    error_log /var/log/nginx/radio.eklesia.app.br_error.log;
}
```

### 5. Ativar site

#### Apache:
```bash
sudo a2ensite radio.eklesia.app.br.conf
sudo systemctl reload apache2
```

#### Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/radio.eklesia.app.br /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 6. Configurar DNS
No seu provedor de DNS, configure:
```
A    radio.eklesia.app.br    173.224.125.126
A    www.radio.eklesia.app.br    173.224.125.126
```

### 7. SSL/HTTPS (Recomendado)
```bash
sudo apt install certbot python3-certbot-apache  # Para Apache
# ou
sudo apt install certbot python3-certbot-nginx   # Para Nginx

sudo certbot --apache -d radio.eklesia.app.br -d www.radio.eklesia.app.br
# ou
sudo certbot --nginx -d radio.eklesia.app.br -d www.radio.eklesia.app.br
```

## 🌐 URLs Finais:
- **HTTP:** http://radio.eklesia.app.br
- **HTTPS:** https://radio.eklesia.app.br (após SSL)
- **IP direto:** http://173.224.125.126

## 📁 Arquivos:
- **Build compactado:** `radio-eklesia-build.tar.gz` (229 KB)
- **GitHub:** https://github.com/AldairSbarros/radio.eklesia.app.br

## 🔄 Para updates futuros:
1. Faça mudanças no código
2. `git add . && git commit -m "sua mensagem" && git push`
3. `npm run build`
4. Faça upload e extraia novamente no VPS
