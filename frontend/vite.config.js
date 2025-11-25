import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import dotenv from 'dotenv';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
  },
  define: {
    'process.env.VITE_APP_API_URL': JSON.stringify(process.env.VITE_APP_API_URL)
  }
})
