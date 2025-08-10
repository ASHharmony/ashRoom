// export const setCookie = (cookieName: string, cookieVal: string) => {
//   document.cookie = `${cookieName} = ${cookieVal}`
// }

// export const getCookie = (cookieName: string) => {
//   // split分割字符串 返回数组
//   const cookieArr = document.cookie.split(';')
//   for (let i = 0; i < cookieArr.length; i++) {
//     const arr = cookieArr[i].split('=')
//     if (arr[0] === cookieName) {
//       return arr[1]
//     }
//   }
//   // 没找到 则返回undefined
//   return undefined
// }

// export const deleteCookie = (cookieName: string) => {
//   const expirationDate = new Date(0)
//   expirationDate.setDate(expirationDate.getDate() - 1)
//   document.cookie = `${cookieName}=; expires=${expirationDate.toUTCString()}`
// }
