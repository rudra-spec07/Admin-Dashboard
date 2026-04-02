import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Replace 'admin-dashboard' with your actual GitHub Repo name
export default defineConfig({
  plugins: [react()],
  base: '/Admin-Dashboard/', 
})