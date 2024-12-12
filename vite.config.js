import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",  
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5000, // Specify the custom port here
    open: true,      // Automatically open the browser on server start (optional)
    cors: true,
  }
})
