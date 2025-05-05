#!/bin/bash

# Lanzamos Vite directamente sin pasar por el servidor Express
cd "$(dirname "$0")"
npx vite --host 0.0.0.0 --port 5000