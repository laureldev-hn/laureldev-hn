#!/bin/bash

# Este script está diseñado para ser utilizado por el workflow de Replit
# Ejecuta Vite directamente en modo de desarrollo

# Nos aseguramos de estar en el directorio raíz del proyecto
cd "$(dirname "$0")"

# Ejecutamos Vite con la configuración adecuada para el entorno de Replit
NODE_ENV=development npx vite --host 0.0.0.0
