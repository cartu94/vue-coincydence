<script setup>
  import { provide, ref } from 'vue';
  import { logout } from './firebase/authService';
  
  const user = ref(null);
  const loading = ref(true);

  provide('user', user);
  provide('loading', loading);

  const signOut = async () => {
    user.value = null;
    await logout();
  }
</script>

<template>
  <nav>
    <h1 v-if="user!=null"> {{`Welcome, ${user?.displayName}`}}</h1>
    <button v-if="user!=null" @click="signOut">sign out</button>
    <h1 v-else>Please, sign in</h1>
  </nav>
  <router-view />
</template>

<style scoped>
  nav {
    @apply bg-gray-200 flex justify-center gap-4 h-[70px] items-center;
  }
  nav h1 {
    @apply text-2xl;
  }
  nav button {
    @apply bg-[var(--g-blue)] px-4 py-2 uppercase rounded-full;
  }
</style>