<template>
  <q-drawer v-model="drawer" side="left" bordered>
    <!-- 햄버거 버튼: 사이드바 닫기 -->
    <div class="drawer-header">
      <q-btn flat round dense icon="menu" @click="toggleDrawer" aria-label="Close Sidebar" />
    </div>

    <!-- 사이드바 내용 -->
    <q-list>
      <q-item clickable v-ripple @click="onItemClick('home')">
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="onItemClick('about')">
        <q-item-section>About</q-item-section>
      </q-item>
      <q-item clickable v-ripple @click="onItemClick('contact')">
        <q-item-section>Contact</q-item-section>
      </q-item>
    </q-list>

    <!-- Logout 버튼 -->
    <div class="drawer-footer">
      <q-item clickable v-ripple @click="logout">
        <q-item-section avatar>
          <q-icon name="logout" />
        </q-item-section>
        <q-item-section>Logout</q-item-section>
      </q-item>
    </div>
  </q-drawer>
</template>

<script>
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:modelValue'],
  setup() {
    const router = useRouter()
    const userStore = useUserStore()

    const onItemClick = (page) => {
      console.log(`${page} clicked`)
      if (page === 'home') {
        router.push('/')
      }
    }

    const logout = async () => {
      console.log('Logout clicked')
      await userStore.logout()
      router.push('/login')
    }

    return {
      router,
      onItemClick,
      logout,
    }
  },
  computed: {
    drawer: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      },
    },
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer // 사이드바 상태 변경
    },
  },
}
</script>

<style scoped>
.drawer-header {
  display: flex;
  justify-content: flex-end;
  padding: 10px;
}

.drawer-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 10px 0;
}
</style>
