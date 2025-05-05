import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import path from 'path';
import { createServer } from 'http';

// Ruta actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

console.log('Iniciando Vite desde el servidor...');

// Función para iniciar Vite
function startVite() {
  const viteProcess = spawn('npx', ['vite', '--host', '0.0.0.0'], {
    cwd: rootDir,
    stdio: 'inherit', // Enviar la salida estándar y errores a la consola
    shell: true
  });

  viteProcess.on('close', (code) => {
    console.log(`Vite se cerró con código ${code}`);
    if (code !== 0) {
      // Intentar reiniciar Vite si se cierra inesperadamente
      console.log('Intentando reiniciar Vite...');
      setTimeout(startVite, 1000);
    }
  });

  viteProcess.on('error', (err) => {
    console.error('Error al iniciar Vite:', err);
  });

  // Manejamos señales para cerrar el proceso correctamente
  process.on('SIGINT', () => {
    viteProcess.kill('SIGINT');
    process.exit(0);
  });

  process.on('SIGTERM', () => {
    viteProcess.kill('SIGTERM');
    process.exit(0);
  });
}

// Creamos un servidor mínimo en el puerto 5000 para satisfacer la condición de waitForPort
const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Servidor de redirección a Vite');
});

server.listen(5000, '0.0.0.0', () => {
  console.log('Servidor de redirección escuchando en puerto 5000');
  // Iniciar Vite después de que el servidor esté escuchando
  startVite();
});
