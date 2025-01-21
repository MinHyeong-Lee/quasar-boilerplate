import { defineStore, acceptHMRUpdate } from 'pinia'
import * as loginAPI from '@/api/login'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    error: null,
    isAuthenticated: false, // 초기화 값
  }),
  actions: {
    // 사용자 정보 로드 (localStorage에서 복원)
    loadUserFromStorage() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
        this.isAuthenticated = true
      }
    },
    async login({ username, password }) {
      try {
        const userData = await loginAPI.login({ username, password })
        this.user = userData
        this.error = null
        this.isAuthenticated = true

        // 로그인 성공 시 사용자 정보를 localStorage에 저장
        localStorage.setItem('user', JSON.stringify(this.user))
      } catch (err) {
        this.user = null
        this.error = 'Login Failed'
        this.isAuthenticated = false
        throw err
      }
    },
    async logout() {
      try {
        await loginAPI.logout()
        this.user = null
        this.isAuthenticated = false

        // 로그아웃 시 localStorage에서 사용자 정보 삭제
        localStorage.removeItem('user')
      } catch (err) {
        this.error = 'Logout Failed'
        throw err
      }
    },
  },
})

// Pinia HMR 지원
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
