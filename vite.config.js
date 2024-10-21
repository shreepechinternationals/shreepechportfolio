import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// vite.config.js
export default {
  base: '/shreepechportfolio/',  // Replace 'your-repo-name' with the actual name of your GitHub repository
  build: {
    outDir: 'dist'  // This ensures the build output goes to 'dist' (default for Vite)
  }
}

