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
  <meta http-equiv="refresh" content="0;URL='/'">
</head>
<body>
  <h2>Redirecting to the app...</h2>
  <p>If you are not redirected automatically, <a href="/">click here</a>.</p>
</body>
</html>
EOL

# Add the redirect script to the head of index.html
echo "📄 Modifying index.html for SPA routing..."
# Instead of using sed, we'll create a new script that's inserted with a simple JS operation
# This is cleaner and avoids syntax errors
cat > redirect-script.js << 'EOL'
(function(){
  var redirect = sessionStorage.redirect;
  delete sessionStorage.redirect;
  if (redirect && redirect !== location.href) {
    history.replaceState(null, null, redirect);
  }
})();
EOL

# Insert the script at the beginning of the head tag
awk '
  /<head>/ {
    print $0;
    print "    <script>";
    system("cat redirect-script.js");
    print "    </script>";
    next;
  }
  { print }
' index.html > index.new.html

mv index.new.html index.html
rm redirect-script.js

# Create CNAME file for GitHub Pages
echo "📄 Creating CNAME file..."
echo "bacanhub.github.io" > CNAME

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