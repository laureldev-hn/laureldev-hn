# Dockerfile para desarrollo
FROM node:20-alpine

WORKDIR /app

# Instalar dependencias del sistema si es necesario
RUN apk add --no-cache libc6-compat

# Copiar archivos de dependencias
COPY package.json ./
COPY package-lock.json* ./

# Instalar dependencias
RUN npm install --legacy-peer-deps

# Copiar el resto de los archivos
COPY . .

# Exponer el puerto de Vite
EXPOSE 5173

# Comando por defecto: modo desarrollo
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

