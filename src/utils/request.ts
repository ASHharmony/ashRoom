/* 封装 axios */
import axios from 'axios'

/* 创建axios实例 */
const http = axios.create({
  baseURL: 'http://127.0.0.1:3000',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

// 请求拦截器
// http.interceptors.request.use((config) => {
//   // 请求发送前的处理
//   const userStore = useUserStore()
// })

export default http
