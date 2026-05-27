#!/bin/bash

# CARPLAYGO Website Deployment Script
# Ce script prépare le site pour le déploiement sur Cloudflare Pages

echo "🚀 Déploiement du site CARPLAYGO"

# Vérifier si on est dans le bon dossier
if [ ! -f "index.html" ] || [ ! -f "styles.css" ] || [ ! -f "script.js" ]; then
    echo "❌ Erreur: Fichiers du site introuvables. Assurez-vous d'être dans le dossier du projet."
    exit 1
fi

# Nettoyer les fichiers temporaires
echo "🧹 Nettoyage des fichiers temporaires..."
rm -rf .git
rm -rf node_modules
rm -f package-lock.json

# Créer la structure pour Cloudflare Pages
echo "📁 Préparation de la structure Cloudflare Pages..."
mkdir -dist

# Copier les fichiers
cp -r * dist/

# Vérifier la structure
echo "📋 Vérification de la structure..."
cd dist && ls -la

echo "✅ Prêt pour le déploiement !"
echo ""
echo "📦 Options de déploiement:"
echo ""
echo "1. GitHub + Cloudflare Pages:"
echo "   a) Créez un repository GitHub: 'carplaygo-website'"
echo "   b) Uploadez les fichiers du dossier 'dist'"
echo "   c) Connectez à Cloudflare Pages"
echo ""
echo "2. Cloudflare Pages Direct:"
echo "   a) Allez sur Cloudflare Dashboard"
echo "   b) Pages → Create project"
echo "   c) Upload files"
echo ""
echo "3. Local avec Wrangler CLI:"
echo "   npm install -g wrangler"
echo "   wrangler pages deploy dist"
echo ""
echo "🌐 URL après déploiement: https://carplaygo.pages.dev"
echo ""
echo "💡 N'oubliez pas de:"
echo "   - Configurer votre domaine personnalisé"
echo "   - Ajouter les analytics (Google Analytics, etc.)"
echo "   - Configurer les DNS pour votre domaine"
echo "   - Activer le HTTPS"