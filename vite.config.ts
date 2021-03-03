import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/devServer': {
        target: 'http:nutui-server.jd.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      }
    }
  },
  plugins: [vue()]
})
