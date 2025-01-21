<template>
    <q-btn label="Login" color="primary" @click="login" />
  </template>
  
  <script>
  export default {
    methods: {
      login() {
        // Add Auth0 or authentication logic here
        console.log('Login button clicked');
      },
    },
  };
  </script>
  