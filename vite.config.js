import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

const serveParentFolders = () => {
  return {
    name: 'serve-parent-folders',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/assets/') || req.url.startsWith('/images/')) {
          const filePath = path.join(__dirname, '..', req.url);
          if (fs.existsSync(filePath)) {
            const ext = path.extname(filePath);
            const mimeType = ext === '.png' ? 'image/png' :
                             ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' :
                             ext === '.webp' ? 'image/webp' :
                             ext === '.svg' ? 'image/svg+xml' : 'application/octet-stream';
            res.setHeader('Content-Type', mimeType);
            res.end(fs.readFileSync(filePath));
            return;
          }
        }
        next();
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), serveParentFolders()],
})
