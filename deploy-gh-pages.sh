#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Navigate to the build output directory
cd dist

# Create 404.html file
echo "📄 Creating 404.html file..."
cat > 404.html << 'EOL'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>BACAN - Redirecting</title>
  <script>
    // GitHub Pages SPA router - adapted from https://github.com/rafgraph/spa-github-pages
    sessionStorage.redirect = location.href;
  </script>
  <meta http-equiv="refresh" content="0;URL='/bacanhub/'">
</head>
<body>
  <h2>Redirecting to the app...</h2>
  <p>If you are not redirected automatically, <a href="/bacanhub/">click here</a>.</p>
</body>
</html>
EOL

# Create a new index.html to handle redirects from 404.html
cat index.html | sed -e "s/<head>/<head>\n<script>\n  (function(){\n    var redirect = sessionStorage.redirect;\n    delete sessionStorage.redirect;\n    if (redirect && redirect !== location.href) {\n      history.replaceState(null, null, redirect.replace('\/bacanhub\/', '\/bacanhub#\/'));\n    }\n  })();\n<\/script>/" > index.new.html
mv index.new.html index.html

# Create or update .nojekyll file to bypass Jekyll processing
echo "📄 Creating .nojekyll file..."
touch .nojekyll

# Initialize git repository if it doesn't exist
if [ ! -d .git ]; then
  echo "🔄 Initializing git repository..."
  git init
  git checkout -b gh-pages
  git remote add origin git@github.com:bacanhub/bacanhub.git
else
  echo "🔄 Using existing git repository..."
fi

# Add all files
echo "➕ Adding files to git..."
git add -A

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy to GitHub Pages - $(date)"

# Push to GitHub Pages
echo "📤 Pushing to GitHub Pages..."
git push -f origin gh-pages

# Navigate back to the root
cd ..

echo "✅ Deployment complete!" 