import { defineStore, acceptHMRUpdate } from 'pinia'
import * as loginAPI from '@/api/login'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    error: null,
    isAuthenticated: false, // 로컬 스토리지에서 초기화
  }),
  actions: {
    async login({ username, password }) {
      try {
        const userData = await loginAPI.login({ username, password })
        this.user = userData
        this.error = null
        this.isAuthenticated = true
      } catch (err) {
        this.user = null
        this.error = 'Login Failed'
        throw err
      }
    },
    async logout() {
      try {
        await loginAPI.logout()
        this.user = null
        this.isAuthenticated = false
      } catch (err) {
        this.error = 'Logout Failed'
        throw err
      }
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
