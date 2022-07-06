/*
 * @Description: 按需引入
 * @Author: Hades
 */
import type { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
export function configAutoImportPlugin(): Plugin | Plugin[] {
  const plugins: Plugin[] = []

  plugins.push(
    AutoImport({
      imports: ['vue'],
      resolvers: [],
      dts: 'types/auto-imports.d.ts'
    })
  )

  plugins.push(
    Components({
      resolvers: [VantResolver()],
      dirs: ['src/components'],
      //组件名称包含目录，防止同名组件冲突
      directoryAsNamespace: false,
      //指定类型声明文件
      dts: 'types/components.d.ts'
    })
  )
  return plugins
}
