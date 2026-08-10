# Docker — LaurelDev Landing

Ejecuta el proyecto sin instalar Node.js en el host.

## Requisitos

- Docker Desktop (incluye Compose)

## Desarrollo (hot-reload)

```bash
docker compose up landing-dev
```

Abre http://localhost:5173

```bash
# Segundo plano
docker compose up -d landing-dev

# Logs
docker compose logs -f landing-dev

# Parar
docker compose down

# Reconstruir imagen
docker compose up --build landing-dev
```

## Producción (nginx)

```bash
docker compose up landing-prod
```

Abre http://localhost

## Notas

- En desarrollo, el código se monta como volumen: los cambios se recargan solos.
- El volumen anónimo `/app/node_modules` evita que el `node_modules` del host pise el del contenedor.
- Para regenerar `package-lock.json` alineado con `package.json`:

```bash
docker compose run --rm landing-dev npm install --legacy-peer-deps
```
