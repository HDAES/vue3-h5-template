import type { UserConfig, ConfigEnv } from "vite";
import { loadEnv } from "vite";
import vue from '@vitejs/plugin-vue'


export default ({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();

  // 获取env文件内容
  const env = loadEnv(mode, root);
  console.log(env)
  return  {
    plugins: [vue()]
  }
}
