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
  <title>BACAN - Page Not Found</title>
  <script>
    // Single Page Apps for GitHub Pages
    // MIT License from https://github.com/rafgraph/spa-github-pages
    // This script takes the current URL and converts the path and query
    // string into a query parameter that GitHub Pages can handle properly
    var pathSegmentsToKeep = 1;

    var l = window.location;
    l.replace(
      l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
      l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
      l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
      (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
      l.hash
    );
  </script>
</head>
<body>
  <h2>Page Not Found</h2>
  <p>Redirecting to homepage...</p>
</body>
</html>
EOL

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