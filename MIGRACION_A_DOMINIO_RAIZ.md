# Guía de Migración a Dominio Raíz (bacanhub.github.io)

Para migrar este sitio al dominio raíz de GitHub Pages, sigue estos pasos:

## 1. Crear un nuevo repositorio en GitHub

1. Ve a [GitHub](https://github.com/new)
2. **Nombre del repositorio**: `bacanhub.github.io` (debe ser exactamente este nombre)
3. Descripción (opcional): "Sitio web de BACAN"
4. Establece el repositorio como público
5. Haz clic en "Create repository"

## 2. Ejecutar el script de migración

Este script actualiza todos los archivos de configuración necesarios:

```bash
./migrate-to-root.sh
```

## 3. Conectar al nuevo repositorio

Cambia el origen remoto de Git:

```bash
git remote rename origin old-origin
git remote add origin git@github.com:bacanhub/bacanhub.github.io.git
```

## 4. Subir el código al nuevo repositorio

```bash
git add .
git commit -m "Preparar para migración a dominio raíz"
git push -u origin main
```

## 5. Desplegar al nuevo sitio

```bash
./deploy-root.sh
```

## 6. Verificar la configuración en GitHub

1. Ve a la configuración del repositorio: `https://github.com/bacanhub/bacanhub.github.io/settings/pages`
2. Asegúrate de que:
   - Source: Deploy from a branch
   - Branch: gh-pages
   - Folder: / (root)
   - Enforce HTTPS: Activado

## 7. Esperar la propagación

Puede tomar unos minutos para que GitHub Pages aplique los cambios. Una vez completado, tu sitio estará disponible en:

**https://bacanhub.github.io/**

## Diferencias con la configuración anterior

- Antes: sitio de proyecto en `/bacanhub/`
- Ahora: sitio de usuario en el dominio raíz
- Ventajas: URL más limpia y profesional 