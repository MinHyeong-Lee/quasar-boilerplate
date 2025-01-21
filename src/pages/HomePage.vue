<template>
  <q-page>
    <div class="home-page">
      <h1>Home</h1>
      <!-- 사용자 정보가 있으면 환영 메시지를 표시 -->
      <p v-if="isAuthenticated">Welcome, {{ user?.employee_name }}!</p>
      <!-- 사용자 정보가 없으면 로그인 요청 메시지를 표시 -->
      <p v-else>Please log in to continue.</p>
    </div>
    <div class="q-pa-md q-gutter-sm">
      <q-btn color="primary" label="Primary" @click="loadtest" />
    </div>
  </q-page>
</template>

<script>
import { useUserStore } from '@/stores/user'
import { loadData } from 'src/api/approval/approval_doctype'

export default {
  setup() {
    const userStore = useUserStore() // Pinia의 userStore 사용

    const loadtest = async () => {
      let a = await loadData()
      console.log(a)
    }

    return {
      user: userStore.user, // 사용자 정보
      isAuthenticated: userStore.isAuthenticated, // 인증 상태
      loadtest,
    }
  },
}
</script>

<style scoped>
.home-page {
  text-align: center;
  margin-top: 50px;
}

h1 {
  font-size: 2em;
  margin-bottom: 20px;
}

p {
  font-size: 1.2em;
}
</style>
