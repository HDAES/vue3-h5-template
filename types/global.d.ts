declare type Recordable<T = any> = Record<string, T>
declare type Nullable<T> = T | null

declare interface ViteEnv {
  // 启动端口号
  VITE_PORT: number
  // 是否启动mock
  VITE_USE_MOCK: boolean
  // 公共基础路径
  VITE_PUBLIC_PATH: string
  // 代理端口
  VITE_PROXY: [string, string][]
  // 标题
  VITE_GLOB_APP_TITLE: string
  // app 名字
  VITE_GLOB_APP_SHORT_NAME: string
  // CDN加速
  VITE_USE_CDN: boolean
  // 是否启动log
  VITE_DROP_CONSOLE: boolean
  // 压缩类型
  VITE_BUILD_COMPRESS: 'gzip' | 'brotli' | 'none'
  // 是否启动压缩
  VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE: boolean
}

interface ImportMetaEnv {
  VITE_GLOB_API_URL: string
  VITE_API_VERSION: string
  VITE_GLOB_API_MOCK: string
  VITE_PUBLIC_PATH: string
}
