<template>
  <q-page>
    <div>
      <h1>Home</h1>
      <p v-if="isAuthenticated">Welcome, {{ userInfo?.username }}!</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </q-page>
</template>

<script>
import { useUserStore } from 'stores/user'
import { useRouter } from 'vue-router'
import { Loading } from 'quasar'

export default {
  setup() {
    console.log('Home')
    const store = useUserStore()
    const router = useRouter()

    const handleLogout = () => {
      console.log('Logout button clicked') // 디버깅 로그
      Loading.show() // 로딩 애니메이션 시작

      // 로그아웃 실행
      store.logout()

      setTimeout(() => {
        Loading.hide() // 로딩 애니메이션 종료

        // 로그인 페이지로 이동
        router.push('/login').catch((err) => {
          console.error('Navigation error:', err) // 라우터 이동 에러 처리
        })
      }, 500)
    }

    return {
      userInfo: store.userInfo, // 사용자 정보
      isAuthenticated: store.isAuthenticated, // 인증 상태
      handleLogout, // 로그아웃 핸들러
    }
  },
}
</script>
