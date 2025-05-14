#!/bin/bash

# Exit on error
set -e

echo "🚀 Starting deployment to GitHub Pages..."

# Build the project
echo "📦 Building the project..."
npm run build

# Navigate to the build output directory
cd dist

# Create or update .nojekyll file to bypass Jekyll processing
echo "📄 Creating .nojekyll file..."
touch .nojekyll

# Create CNAME file for custom domain
echo "bacanhub.github.io" > CNAME

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