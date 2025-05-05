#!/bin/bash

# Navegamos al directorio donde se encuentra el proyecto
cd "$(dirname "$0")"

# Ejecutamos vite con el host configurado para ser accesible desde el exterior
npx vite --host 0.0.0.0
