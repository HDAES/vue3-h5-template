import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

import VueSetupExtend from "vite-plugin-vue-setup-extend";

import type { PluginOption } from "vite";

import { configHtmlPlugin } from "./html";

import { configSvgIconsPlugin } from "./svgSprite";
import { configAutoImportPlugin } from "./autoImport";

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
  const {
    VITE_USE_IMAGEMIN,
    VITE_USE_MOCK,
    VITE_LEGACY,
    VITE_BUILD_COMPRESS,
    VITE_BUILD_COMPRESS_DELETE_ORIGIN_FILE,
  } = viteEnv;

  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue(),
    vueJsx(),
    VueSetupExtend(),
  ];

  // vite-plugin-windicss
  //vitePlugins.push(WindiCSS())

  // vite-plugin-html
  vitePlugins.push(configHtmlPlugin(viteEnv, isBuild));

  //vite-plugin-svg-icons
  //vitePlugins.push(configSvgIconsPlugin(isBuild));

  //unplugin-auto-import
  vitePlugins.push(configAutoImportPlugin());

  if (isBuild) {
  }

  return vitePlugins;
}
