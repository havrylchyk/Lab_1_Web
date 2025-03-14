import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

declare const process: {
  env: {
    GITHUB_PAGES?: string;
    [key: string]: string | undefined;
  }
}

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES ? '/Lab_1_Web/' : '/'
})