import { defineStore } from 'pinia'
import { ref } from 'vue'

interface UserInfo {
  id: number
  nickname: string
  avatar: string
}

// 全局定义
export const useUserStore = defineStore(
  'UserStore',
  () => {
    // // 定义一个token记录登录状态
    // const loginToken = ref<string | undefined>(undefined)

    // // 修改token
    // const setloginToken = (token: string | undefined) => {
    //   loginToken.value = token
    // }

    // // 监听token
    // watch(loginToken, (newToken) => {
    //   if (newToken !== undefined) {
    //     setCookie('loginToken', newToken)
    //   } else {
    //     deleteCookie('loginToken')
    //   }
    // })

    // 定义一个对象，记录用户信息
    const userInfo = ref<UserInfo | undefined>(undefined)

    // 修改用户信息
    const setUserInfo = (info: UserInfo | undefined) => {
      userInfo.value = info
    }

    return { userInfo, setUserInfo }
  },
  // 持久化
  {
    persist: true,
  },
)
