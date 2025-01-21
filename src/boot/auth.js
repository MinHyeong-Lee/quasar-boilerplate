import { boot } from 'quasar/wrappers'
import { useUserStore } from '@/stores/user'

export default boot(() => {
  const userStore = useUserStore()
  // localStorage에서 사용자 정보 복원
  userStore.loadUserFromStorage()
})
