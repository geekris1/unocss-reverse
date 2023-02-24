import * as path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    resolve: {
      alias: {
        '@/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
  })
}
