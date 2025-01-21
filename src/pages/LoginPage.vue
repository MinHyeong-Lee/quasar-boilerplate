<template>
  <q-page>
    <div class="login-page">
      <!-- 상단 헤더 -->
      <div class="logo-section">
        <q-img
          src="/FNSERP_logo.png"
          alt="Company Logo"
          style="width: 35vw; max-width: 200px; height: auto"
        />
      </div>

      <!-- 로그인 폼 -->
      <div class="login-form">
        <q-input v-model="username" label="ID" outlined class="form-input" />
        <q-input v-model="password" label="PASSWORD" outlined type="password" class="form-input" />
        <q-btn label="Login" color="primary" unelevated class="login-btn" @click="handleLogin" />
      </div>
    </div>

    <q-dialog v-model="showErrorDialog" persistent>
      <q-card style="width: 700px; max-width: 80vw">
        <q-card-section class="text-h6">Login Failed</q-card-section>
        <q-card-section>
          <p>{{ errorMessage }}</p>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat label="Close" color="primary" @click="closeErrorDialog" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

export default {
  setup() {
    const router = useRouter()
    const userStore = useUserStore() // Pinia store 사용
    const username = ref('')
    const password = ref('')

    // QDialog 관련 상태
    const showErrorDialog = ref(false)
    const errorMessage = ref('')

    const handleLogin = async () => {
      try {
        await userStore.login({ username: username.value, password: password.value })
        console.log('Login Success:', userStore.user)

        // 로그인 성공 시 홈으로 이동
        router.push('/')
      } catch (err) {
        console.log(err)
        // 에러 메시지 설정 및 QDialog 표시
        errorMessage.value = 'Login Failed'
        showErrorDialog.value = true
      }
    }

    const closeErrorDialog = () => {
      showErrorDialog.value = false
    }

    return {
      username,
      password,
      userStore,
      handleLogin,
      showErrorDialog,
      errorMessage,
      closeErrorDialog,
    }
  },
}
</script>

<style>
.login-page {
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
}

/* 로그인 폼 스타일 */
.login-form {
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  gap: 15px;
}

.pc-keyboard-btn {
  align-self: flex-start;
}

.form-input {
  width: 100%;
}

.login-btn {
  height: 50px;
  font-size: 18px;
  font-weight: bold;
}

.logo-section {
  margin-top: 10vh; /* 화면 높이의 10% */
  margin-bottom: 3vh;
  text-align: center; /* 로고 가운데 정렬 */
}
</style>
