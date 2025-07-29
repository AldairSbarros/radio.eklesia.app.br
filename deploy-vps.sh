#!/bin/bash

# Script para deploy no VPS 173.224.125.126
# Execute após fazer o push para o GitHub

echo "🚀 Fazendo deploy da Radio Eklesia para o VPS..."

# 1. Build do projeto
echo "📦 Gerando build de produção..."
npm run build

# 2. Criar arquivo tar com os arquivos do build
echo "📁 Compactando arquivos..."
cd dist
tar -czf ../radio-eklesia-build.tar.gz *
cd ..

echo "✅ Arquivos prontos para upload!"
echo ""
echo "📋 Próximos passos para deploy no VPS:"
echo "1. Faça upload do arquivo: radio-eklesia-build.tar.gz"
echo "2. No VPS, extraia para: /var/www/radio.eklesia.app.br/"
echo "3. Configure o Apache/Nginx para servir os arquivos"
echo ""
echo "🔧 Comandos no VPS:"
echo "sudo mkdir -p /var/www/radio.eklesia.app.br"
echo "sudo tar -xzf radio-eklesia-build.tar.gz -C /var/www/radio.eklesia.app.br/"
echo "sudo chown -R www-data:www-data /var/www/radio.eklesia.app.br"
echo ""
echo "🌐 Site ficará disponível em:"
echo "- http://173.224.125.126"
echo "- http://radio.eklesia.app.br"
