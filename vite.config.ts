import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/devServer': {
        target: 'http:nutui-server.jd.com',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devServer/, '')
      }
    },
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, './src') }]
  },
  plugins: [vue()]
})
