import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use root path for Vercel and local development
  // For GitHub Pages, set VITE_DEPLOY_TARGET=github-pages in build settings
  base: process.env.VITE_DEPLOY_TARGET === 'github-pages' ? '/ITEW6-LABEXAM/' : '/',
})

