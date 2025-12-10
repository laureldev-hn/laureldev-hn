# Configuración DNS para laureldev.hn - GitHub Pages

**Dominio:** `laureldev.hn`  
**Proveedor DNS:** BITAIN (Buro Internacional de Tecnologias)  
**Propósito:** Migración de Replit a GitHub Pages  
**Fecha:** Diciembre 2024

---

## ⚠️ PASO 1: Eliminar Registros Antiguos de Replit

**IMPORTANTE:** Primero eliminar estos registros DNS que ya no se necesitan:

| Tipo | Hostname | Record | Acción |
|------|----------|--------|--------|
| A | `@` | `34.111.179.208` | ❌ **ELIMINAR** |
| TXT | `@` | `replit-verify=9a9b76c3-5979-40c0-9111-136fc52ee7d1` | ❌ **ELIMINAR** |
| A | `www` | `34.111.179.208` | ❌ **ELIMINAR** |
| TXT | `www` | `replit-verify=9a9b76c3-5979-40c0-9111-136fc52ee7d1` | ❌ **ELIMINAR** |

---

## ✅ PASO 2: Agregar Nuevos Registros para GitHub Pages

### Para el dominio raíz (laureldev.hn)

Crear **4 registros tipo A** con las siguientes IPs de GitHub Pages:

| Tipo | Hostname | Record | TTL |
|------|----------|--------|-----|
| A | `@` | `185.199.108.153` | 3600 (o Auto) |
| A | `@` | `185.199.109.153` | 3600 (o Auto) |
| A | `@` | `185.199.110.153` | 3600 (o Auto) |
| A | `@` | `185.199.111.153` | 3600 (o Auto) |

**Nota:** Se requieren los 4 registros A para redundancia y balanceo de carga de GitHub Pages.

---

### Para el subdominio www (www.laureldev.hn)

Crear **1 registro tipo CNAME**:

| Tipo | Hostname | Record | TTL |
|------|----------|--------|-----|
| CNAME | `www` | `laureldev-hn.github.io` | 3600 (o Auto) |

**Nota:** Si el nombre de la organización/usuario en GitHub es diferente, reemplazar `laureldev-hn` por el nombre correcto.

---

## 📋 Resumen de Configuración Final

Después de realizar los cambios, los registros DNS deben quedar así:

| Tipo | Hostname | Record | Estado |
|------|----------|--------|--------|
| A | `@` | `185.199.108.153` | ✅ NUEVO |
| A | `@` | `185.199.109.153` | ✅ NUEVO |
| A | `@` | `185.199.110.153` | ✅ NUEVO |
| A | `@` | `185.199.111.153` | ✅ NUEVO |
| CNAME | `www` | `laureldev-hn.github.io` | ✅ NUEVO |

---

## ⏱️ Tiempo de Propagación

- Los cambios DNS pueden tardar entre **5 minutos y 24 horas** en propagarse globalmente
- Normalmente se reflejan en **1-2 horas**
- Puedes verificar la propagación usando herramientas como:
  - `nslookup laureldev.hn`
  - `dig laureldev.hn`
  - [whatsmydns.net](https://www.whatsmydns.net/)

---

## 🔍 Verificación Después de Configurar

Una vez configurados los registros, verificar que apunten correctamente:

```bash
# Verificar dominio raíz
nslookup laureldev.hn

# Verificar subdominio www
nslookup www.laureldev.hn
```

Deberías ver las IPs de GitHub Pages (185.199.108.153, 185.199.109.153, etc.) en los resultados.

---

## 📝 Instrucciones Adicionales

1. **No eliminar otros registros DNS** que no estén relacionados con Replit (como MX para correo, etc.)
2. **Mantener el TTL** en 3600 segundos (1 hora) o Auto, según la configuración del proveedor
3. **Verificar** que no haya conflictos con otros servicios que usen el dominio

---

## ❓ Preguntas Frecuentes

**P: ¿Por qué necesito 4 registros A?**  
R: GitHub Pages usa múltiples IPs para balanceo de carga y redundancia. Se requieren las 4 para un funcionamiento óptimo.

**P: ¿Puedo usar CNAME en lugar de A para el dominio raíz?**  
R: Algunos proveedores DNS no permiten CNAME en el dominio raíz (@). Por eso se recomienda usar registros A para @ y CNAME para www.

**P: ¿Cuánto tiempo tarda en funcionar?**  
R: Una vez configurado el DNS, GitHub detectará el dominio automáticamente. El certificado SSL puede tardar hasta 24 horas en generarse, aunque normalmente es más rápido.

---

## 📞 Contacto

Si tienes dudas sobre esta configuración, por favor contacta al equipo de desarrollo.

---

**Documento generado:** Diciembre 2024  
**Versión:** 1.0

