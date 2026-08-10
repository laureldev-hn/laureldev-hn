# Guía de despliegue a GitHub Pages

Despliegue de la landing de LaurelDev en GitHub Pages con dominio personalizado.

## Archivos involucrados

- `vite.config.ts` — `base: '/'` para GitHub Pages
- `.github/workflows/deploy.yml` — build y publicación automática
- `client/public/CNAME` — dominio `laureldev.hn`

## Pasos

### 1. Subir el código

```bash
git add .
git commit -m "Configurar despliegue a GitHub Pages"
git push origin master
```

### 2. Activar GitHub Pages

1. Repositorio en GitHub → **Settings** → **Pages**
2. En **Source**, elige **GitHub Actions**

### 3. Configurar DNS (BITAIN u otro proveedor)

**Dominio raíz (`laureldev.hn`)** — 4 registros tipo **A**:

| Tipo | Host | Valor |
|------|------|-------|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |

**Subdominio `www`** — un **CNAME**:

| Tipo | Host | Valor |
|------|------|-------|
| CNAME | `www` | `tu-usuario.github.io` |

Reemplaza `tu-usuario.github.io` por tu usuario o organización de GitHub.

### 4. Validar HTTPS

1. En **Settings** → **Pages**, confirma que GitHub detectó el dominio
2. Activa **Enforce HTTPS**
3. El certificado puede tardar minutos u horas

### 5. Verificar

- Cada push a `master` dispara el workflow en la pestaña **Actions**
- El sitio queda en `https://laureldev.hn`

## Build local

```bash
npm run build
npm run preview
```

Con Docker:

```bash
docker compose up landing-prod
```

## Problemas frecuentes

- **Dominio no valida:** revisa DNS con `nslookup laureldev.hn` y espera propagación (hasta 24 h). Confirma que `client/public/CNAME` exista.
- **Workflow falla:** la rama del workflow debe coincidir con la del repo (`master` o `main` en `.github/workflows/deploy.yml`).
- **Assets rotos:** `vite.config.ts` debe tener `base: '/'`. Si el sitio no vive en la raíz del dominio de Pages, usa `/nombre-repo/`.
