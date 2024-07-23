import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(

  )],
  resolve: {
    alias: {
      "@components": fileURLToPath(new URL("../bunchee-vue-jsx/src", import.meta.url))
    }
  }
})
