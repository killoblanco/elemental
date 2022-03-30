import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
import * as pkg from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src', 'lib', 'index.ts'),
      name: 'Elemental',
      fileName: format => `lib.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies || {}),
    }
  }
})
