<template>
  <q-drawer v-model="drawer" side="left" bordered>
    <!-- Sidebar 내용 -->
    <q-list>
      <q-item clickable v-ripple>
        <q-item-section>Home</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>About</q-item-section>
      </q-item>
      <q-item clickable v-ripple>
        <q-item-section>Contact</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false, // 사이드바 상태 (true: 열림, false: 닫힘)
    }
  },
}
</script>
