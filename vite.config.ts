import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// @ts-ignore 
const base = process.env.GITHUB_PAGES === 'true' ? '/lab_1_web/' : '/'

export default defineConfig({
  plugins: [react()],
  base,
})