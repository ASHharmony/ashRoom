import { createApp } from 'vue'
// 导入 Pinia
import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

// 导入 ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 导入 icon
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()
const persist = createPersistedState()
pinia.use(persist)

app.use(pinia)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(ElementPlus)

app.mount('#app')
