
import path from 'path'
import legacy from '@vitejs/plugin-legacy'
import { defineConfig } from 'vite'
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import WindiCSS from 'vite-plugin-windicss'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import ScriptSetup from 'unplugin-vue2-script-setup/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { ElementUiResolver } from 'unplugin-vue-components/resolvers'
import compressPlugin from 'vite-plugin-compression'

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${path.resolve(__dirname, 'src')}`,
    },
    dedupe: ['vue-demi'],
  },

  base: './',

  build: {
    minify: true,
    rollupOptions: {
      input: {
        'index': path.resolve(__dirname, 'index.html'),
        'page-3720x1488': path.resolve(__dirname, 'page-3720x1488.html'),
        'page-3720x1488-original': path.resolve(__dirname, 'page-3720x1488-original.html'),
      },
    },
  },

  plugins: [
    legacy(),
    Vue2(),
    ScriptSetup(),
    WindiCSS(),
    Components({
      resolvers: [
        ElementUiResolver(),
        IconsResolver({
          componentPrefix: '',
        }),
      ],
      dts: 'src/components.d.ts',
    }),
    Icons(),
    AutoImport({
      resolvers: [ElementUiResolver()],
      imports: [
        '@vue/composition-api',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
    }),
    compressPlugin({
      filter: /\.(js|mjs|json|css|html|jpg|png|gif)$/i,
      ext: '.gz', // gz br
      algorithm: 'gzip', // brotliCompress gzip
      deleteOriginFile: false,
    }),
  ],

  server: {
    // port: 3333,
  },
})

export default config
