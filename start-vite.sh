#!/bin/bash

# Script para iniciar directamente Vite en el puerto 5000
# Esto evita problemas de redirección entre HTTP y HTTPS

echo "Iniciando Vite directamente en el puerto 5000..."
cd "$(dirname "$0")/client"
npx vite --host 0.0.0.0 --port 5000