# Guía de Despliegue a GitHub Pages

Esta guía te ayudará a desplegar la landing page de LaurelDev a GitHub Pages con dominio personalizado.

## Archivos Configurados

✅ `vite.config.ts` - Configurado con `base: '/'` para GitHub Pages
✅ `.github/workflows/deploy.yml` - Workflow de GitHub Actions para despliegue automático
✅ `client/public/CNAME` - Archivo con tu dominio personalizado (laureldev.hn)

## Pasos para Desplegar

### 1. Subir el código a GitHub

```bash
git add .
git commit -m "Configurar despliegue a GitHub Pages"
git push origin main
```

### 2. Configurar GitHub Pages en el Repositorio

1. Ve a tu repositorio en GitHub
2. Click en **Settings** → **Pages**
3. En **Source**, selecciona **"GitHub Actions"**
4. Guarda los cambios

### 3. Configurar DNS en tu Proveedor de Dominio (BITAIN)

**IMPORTANTE:** Necesitas reemplazar los registros DNS actuales de Replit por los de GitHub Pages.

#### Paso 1: Eliminar registros antiguos de Replit

Elimina estos registros que tenías para Replit:
- ❌ A record `@` → `34.111.179.208` (Replit)
- ❌ TXT record `@` → `replit-verify=...` (Replit)
- ❌ A record `www` → `34.111.179.208` (Replit)
- ❌ TXT record `www` → `replit-verify=...` (Replit)

#### Paso 2: Agregar registros nuevos para GitHub Pages

En tu proveedor BITAIN, configura los siguientes registros:

**Para el dominio raíz (`laureldev.hn`):**

Crea 4 registros tipo **A**:

```
Tipo: A
Host: @
Valor: 185.199.108.153
TTL: Auto (o 3600)

Tipo: A
Host: @
Valor: 185.199.109.153
TTL: Auto (o 3600)

Tipo: A
Host: @
Valor: 185.199.110.153
TTL: Auto (o 3600)

Tipo: A
Host: @
Valor: 185.199.111.153
TTL: Auto (o 3600)
```

**Para el subdominio www (`www.laureldev.hn`):**

Crea un registro tipo **CNAME**:

```
Tipo: CNAME
Host: www
Valor: tu-usuario.github.io
TTL: Auto (o 3600)
```

**Nota:** Reemplaza `tu-usuario.github.io` con tu usuario real de GitHub (ej: `juanperez.github.io`)

#### Alternativa: Solo CNAME (si tu proveedor lo permite)

Si prefieres usar solo CNAME para ambos:

```
Tipo: CNAME
Host: @
Valor: tu-usuario.github.io
TTL: Auto (o 3600)

Tipo: CNAME
Host: www
Valor: tu-usuario.github.io
TTL: Auto (o 3600)
```

**Nota:** Algunos proveedores DNS no permiten CNAME en el dominio raíz (@), por eso se recomienda usar A records para @ y CNAME para www.

### 4. Esperar la Validación del Dominio

1. Después de configurar el DNS, GitHub detectará automáticamente el dominio
2. Ve a **Settings** → **Pages** y verás el dominio configurado
3. Marca la casilla **"Enforce HTTPS"** (esto puede tardar unos minutos en activarse)
4. Espera a que el certificado SSL se genere (puede tardar hasta 24 horas, pero usualmente es más rápido)

### 5. Verificar el Despliegue

- El workflow se ejecutará automáticamente cada vez que hagas push a la rama `main`
- Puedes ver el progreso en la pestaña **Actions** de tu repositorio
- Una vez completado, tu sitio estará disponible en `https://laureldev.hn`

## Comandos Útiles

### Ver el estado del workflow
```bash
# Ve a la pestaña "Actions" en GitHub para ver los logs
```

### Hacer build local para probar
```bash
npm run build
# Los archivos estarán en la carpeta dist/
```

### Previsualizar el build local
```bash
npm run preview
```

## Solución de Problemas

### El dominio no se valida
- Verifica que los registros DNS estén correctos usando `nslookup laureldev.hn` o `dig laureldev.hn`
- Espera hasta 24 horas para la propagación DNS
- Asegúrate de que el archivo `CNAME` esté en `client/public/CNAME`

### El workflow falla
- Verifica que la rama se llame `main` (o cambia `main` a `master` en `.github/workflows/deploy.yml`)
- Revisa los logs en la pestaña **Actions** de GitHub

### Los assets no cargan
- Verifica que `vite.config.ts` tenga `base: '/'` configurado correctamente
- Si tu repositorio no es la raíz, cambia el `base` a `/nombre-repo/`

## Notas Importantes

- El workflow se ejecuta automáticamente en cada push a `main`
- El archivo `CNAME` debe estar en `client/public/CNAME` para que se copie al build
- GitHub Pages solo funciona con repositorios públicos (gratis) o con GitHub Pro/Team
- El certificado SSL se genera automáticamente después de validar el dominio

