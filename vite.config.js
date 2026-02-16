import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use base path only for production builds (GitHub Pages)
  // For local development, use root path
  const base = mode === 'production' ? '/ITEW6-LABEXAM/' : '/'
  
  return {
    plugins: [react()],
    base: base,
  }
})

