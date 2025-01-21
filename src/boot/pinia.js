// src/boot/pinia.js
import { createPinia } from 'pinia'
import piniaPersistedState from 'pinia-plugin-persistedstate'

export default ({ app }) => {
  const pinia = createPinia()
  pinia.use(piniaPersistedState)
  app.use(pinia)
}
