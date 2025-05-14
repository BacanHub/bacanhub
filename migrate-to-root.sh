#!/bin/bash

# Exit on error
set -e

echo "🚀 Preparando la migración a bacanhub.github.io..."

# Actualizar configuración para dominio raíz
echo "📝 Actualizando configuración..."

# Actualizar vite.config.ts
sed -i '' 's|base: "/bacanhub/"|base: "/"|g' vite.config.ts

# Actualizar package.json
sed -i '' 's|"homepage": "https://bacanhub.github.io/bacanhub/"|"homepage": "https://bacanhub.github.io/"|g' package.json

# Crear CNAME
echo "bacanhub.github.io" > client/public/CNAME

# Actualizar 404.html
cat > client/public/404.html << 'EOL'
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>BACAN - Redirecting</title>
  <script>
    // Single Page Apps for GitHub Pages
    // https://github.com/rafgraph/spa-github-pages
    // This script takes the current URL and converts the path and query
    // string into just a query string, and then redirects the browser
    // to the new URL with only a query string and hash fragment
    
    // For GitHub Pages with organization site (using root domain)
    
    // We don't need to skip repo name since we're at the root
    var segmentCount = 0;
    
    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      '/?/' +
      l.pathname.slice(1).split('/').slice(segmentCount).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <h1>Redirecting...</h1>
</body>
</html>
EOL

# Actualizar deploy.sh manualmente
echo "📝 Ahora necesitas actualizar deploy.sh manualmente para incluir la línea:"
echo "# Create CNAME file for domain"
echo "echo \"bacanhub.github.io\" > CNAME"
echo "después de 'touch .nojekyll'"
echo ""

echo "✅ Configuración actualizada!"
echo ""
echo "INSTRUCCIONES PARA MIGRAR:"
echo "------------------------"
echo "1. Crea un nuevo repositorio en GitHub llamado exactamente: bacanhub.github.io"
echo "2. Ejecuta los siguientes comandos para migrar tu código:"
echo ""
echo "   git remote rename origin old-origin"
echo "   git remote add origin git@github.com:bacanhub/bacanhub.github.io.git"
echo "   git push -u origin main"
echo ""
echo "3. Después ejecuta: ./deploy-root.sh"
echo ""
echo "Tu sitio estará disponible en: https://bacanhub.github.io/" 