# Radio Eklesia - Landing Page

Uma landing page moderna e responsiva para a Radio Eklesia com player de rádio online integrado.

## 🎵 Características

- **Player de Rádio Online** - Streaming direto do servidor Icecast2
- **Design Responsivo** - Funciona em desktop, tablet e mobile
- **Interface Moderna** - Gradientes, animações e efeitos visuais
- **Logo Integrado** - EklesiaKonecta.png no header
- **Player Otimizado** - Baixa latência e alta estabilidade
- **Controles Profissionais** - Play/pause, volume e indicador ao vivo

## 🚀 Tecnologias

- **React 19** - Framework front-end
- **Vite** - Build tool e dev server
- **CSS3** - Animações e responsive design
- **HTML5 Audio API** - Player de streaming

## 📻 Stream

- **URL:** `http://173.224.125.126:8000/radio`
- **Formato:** MP3
- **Tipo:** Icecast2 Stream

## 🛠️ Comandos

### Desenvolvimento
```bash
npm run dev
```
Inicia servidor de desenvolvimento em `http://localhost:5174`

### Build de Produção
```bash
npm run build
```
Gera arquivos otimizados na pasta `dist/`

### Preview do Build
```bash
npm run preview
```
Testa o build localmente em `http://localhost:4173`

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── UltraSimplePlayer.jsx    # Player principal otimizado
│   ├── RadioPlayer.css          # Estilos do player
│   └── ...
├── assets/
│   └── EklesiaKonecta.png      # Logo da rádio
├── App.jsx                     # Componente principal
├── App.css                     # Estilos globais
└── main.jsx                    # Entry point
```

## 🚀 Deploy

### Opção 1: Servidor Web
1. Execute `npm run build`
2. Copie o conteúdo da pasta `dist/` para seu servidor web
3. Configure o servidor para servir `index.html` como fallback

### Opção 2: Vercel
```bash
npm install -g vercel
vercel
```

### Opção 3: Netlify
1. Conecte o repositório no Netlify
2. Configure build command: `npm run build`
3. Configure publish directory: `dist`

### Opção 4: GitHub Pages
1. Instale gh-pages: `npm install --save-dev gh-pages`
2. Adicione ao package.json:
```json
{
  "scripts": {
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://usuario.github.io/radio.eklesia.app.br"
}
```
3. Execute: `npm run build && npm run deploy`

## 🎯 Status do Projeto

### ✅ Implementado
- [x] Player de rádio online otimizado
- [x] Controles de play/pause e volume
- [x] Design responsivo
- [x] Logo EklesiaKonecta integrado
- [x] Seções: Hero, Sobre, Programação, Contato
- [x] Footer com redes sociais
- [x] Indicador ao vivo
- [x] Tratamento de erros
- [x] Build para produção

### 💡 Melhorias Futuras (Opcionais)
- [ ] Metadados da música atual
- [ ] Histórico de reprodução
- [ ] Botão compartilhar
- [ ] Tema claro/escuro
- [ ] PWA (Progressive Web App)

## 📱 Compatibilidade

- ✅ Chrome/Chromium
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis
- ✅ Tablets

## 🔧 Configuração do Stream

Se precisar alterar o stream, edite a URL em:
```javascript
// src/components/UltraSimplePlayer.jsx
const streamUrl = "http://173.224.125.126:8000/radio"
```

---

Desenvolvido com ❤️ para a Radio Eklesia
