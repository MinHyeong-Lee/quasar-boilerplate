<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn flat round dense icon="menu" @click="toggleDrawer" aria-label="Toggle Sidebar" />
      <q-toolbar-title> FNSERP </q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>

<script>
export default {
  name: 'AppHeader', // 다단어 컴포넌트 이름
  methods: {
    toggleDrawer() {
      this.$emit('toggle-sidebar')
    },
  },
}
</script>
