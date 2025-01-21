<template>
    <q-btn label="Logout" color="negative" @click="logout" />
  </template>
  
  <script>
  export default {
    methods: {
      logout() {
        // Add logout logic here
        console.log('Logout button clicked');
      },
    },
  };
  </script>
  