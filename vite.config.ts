import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import AutoImport from 'unplugin-auto-import/vite'

const base = process.env.BASE_PATH || '/'
const isPreview = process.env.IS_PREVIEW ? true : false;
// https://vite.dev/config/
export default defineConfig({
  define: {
    __BASE_PATH__: JSON.stringify(base),
    __IS_PREVIEW__: JSON.stringify(isPreview)
  },
  plugins: [react(),
  AutoImport({
    imports: [
      {
        'react': [
          'React',
          'useState',
          'useEffect',
          'useContext',
          'useReducer',
          'useCallback',
          'useMemo',
          'useRef',
          'useImperativeHandle',
          'useLayoutEffect',
          'useDebugValue',
          'useDeferredValue',
          'useId',
          'useInsertionEffect',
          'useSyncExternalStore',
          'useTransition',
          'startTransition',
          'lazy',
          'memo',
          'forwardRef',
          'createContext',
          'createElement',
          'cloneElement',
          'isValidElement'
        ]
      },
      {
        'react-router-dom': [
          'useNavigate',
          'useLocation',
          'useParams',
          'useSearchParams',
          'Link',
          'NavLink',
          'Navigate',
          'Outlet'
        ]
      },
      // React i18n
      {
        'react-i18next': [
          'useTranslation',
          'Trans'
        ]
      }
    ],
    dts: true,
  }),
  ],
  base,
  build: {
    sourcemap: false, // <-- 確保此處為 false
    outDir: 'out',
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
    headers: {
      'Content-Security-Policy': "default-src 'self' data: blob: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; img-src 'self' data: https:; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com; connect-src 'self' https: wss:;"
    },
  }
})
