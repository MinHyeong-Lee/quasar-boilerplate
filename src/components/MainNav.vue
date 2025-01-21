<template>
    <q-drawer show-if-above v-model="drawer" bordered>
      <q-list>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            Home
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="settings" />
          </q-item-section>
          <q-item-section>
            Settings
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
  </template>
  
  <script>
  console.log("@!#!@##@!")
  export default {
    data() {
      return {
        drawer: false,
      };
    },
  };
  </script>
  