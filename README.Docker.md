# Docker Setup - LaurelDev Landing

Este proyecto está dockerizado para que puedas ejecutarlo sin necesidad de tener Node.js o npm instalado localmente.

## Requisitos

- Docker instalado
- Docker Compose instalado (viene incluido con Docker Desktop)

## Modo Desarrollo

Para ejecutar el proyecto en modo desarrollo con hot-reload:

```bash
docker-compose up landing-dev
```

O usando Docker directamente:

```bash
docker build -t laureldev-landing-dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules laureldev-landing-dev
```

El proyecto estará disponible en: `http://localhost:5173`

## Modo Producción

Para construir y ejecutar la versión de producción:

```bash
docker-compose up landing-prod
```

O usando Docker directamente:

```bash
docker build -f Dockerfile.prod -t laureldev-landing-prod .
docker run -p 80:80 laureldev-landing-prod
```

El proyecto estará disponible en: `http://localhost`

## Comandos Útiles

### Ver logs
```bash
docker-compose logs -f landing-dev
```

### Detener contenedores
```bash
docker-compose down
```

### Reconstruir imágenes
```bash
docker-compose build --no-cache
```

### Ejecutar comandos dentro del contenedor
```bash
docker-compose exec landing-dev npm run build
```

## Notas

- En modo desarrollo, los cambios en los archivos se reflejan automáticamente gracias al volumen montado
- En modo producción, los archivos se sirven con nginx para mejor rendimiento
- El puerto puede cambiarse modificando `docker-compose.yml`

