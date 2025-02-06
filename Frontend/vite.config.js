import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],         
  server:{
    port:4001,
    proxy:{
      '/api':{
        target: 'http://127.0.0.1:5001',
        changeOrigin: true,
      }
    }
  }       
})