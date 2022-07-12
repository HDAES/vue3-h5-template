import type { UserConfig, ConfigEnv } from 'vite'
import { loadEnv } from 'vite'
import postcsspxtoviewport from 'postcss-px-to-viewport'
import { wrapperEnv, getEnvConfig } from './build/utils'
import { createVitePlugins } from './build/vite/plugin'
import { createProxy } from './build/vite/proxy'

// #配置文件 https://cn.vitejs.dev/config/shared-options.html
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()

  // 获取env文件内容
  const env = loadEnv(mode, root)
  const viteEnv = wrapperEnv(env)

  const { VITE_PORT, VITE_PROXY, VITE_DROP_CONSOLE } = viteEnv
  return {
    css: {
      postcss: {
        plugins: [
          postcsspxtoviewport({
            viewportWidth: 375
          })
        ]
      }
    },
    server: {
      host: true,
      port: VITE_PORT,
      // Load proxy configuration from .env
      proxy: createProxy(VITE_PROXY)
    },
    plugins: createVitePlugins(viteEnv, command === 'build')
  }
}
