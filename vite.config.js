import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0',
    allowedHosts: ["dafe48e6-b41f-45fd-af23-cb179ce276f4-00-1ugrwdl2lq0qg.sisko.replit.dev"]
  }
})
