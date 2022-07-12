import axios, { AxiosRequestConfig, AxiosResponse, AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  timeout: 30000
})

//请求拦截
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  error => {
    return Promise.resolve(error)
  }
)

//响应拦截
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data.code
  },
  error => {
    let { message } = error
    if (message == 'Network Error') {
      message = '后端接口连接异常'
    } else if (message.includes('timeout')) {
      message = '系统接口请求超时'
    } else if (message.includes('Request failed with status code')) {
      message = '系统接口' + message.substr(message.length - 3) + '异常'
    }

    return Promise.reject(error)
  }
)

export default instance
