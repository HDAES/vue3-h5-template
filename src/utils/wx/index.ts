// 注册微信 js
export const initJssdk = (url: string): void => {}

//判断运行环境
export const isWechat = (): boolean => {
  let ua = window.navigator.userAgent.toLowerCase()
  return ua.includes('micromessenger')
}
