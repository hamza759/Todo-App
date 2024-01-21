import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://hamza759.github.io/Todo-App/",
  plugins: [react()],
})
