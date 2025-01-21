<template>
    <q-header elevated>
      <q-toolbar>
        <q-btn flat round icon="menu" aria-label="Menu" />
        <q-toolbar-title>FNSERP</q-toolbar-title>
        <q-space />
        <LoginButton v-if="!isLoggedIn" />
        <LogoutButton v-if="isLoggedIn" />
      </q-toolbar>
    </q-header>
  </template>
  
  <script>
  import LoginButton from './LoginButton.vue';
  import LogoutButton from './LogoutButton.vue';
  
  export default {
    components: {
      LoginButton,
      LogoutButton,
    },
    data() {
      return {
        isLoggedIn: false, // Replace with actual login state logic
      };
    },
  };
  </script>
  