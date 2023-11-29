<script setup>
  import { provide, ref } from 'vue';
  import { logout } from './firebase/authService';
  import { auth } from './firebase';
  
  const user = ref(auth.currentUser);
  const loading = ref(true);

  provide('user', user);
  provide('loading', loading);

  const signOut = async () => {
    console.log('signOut');
    console.log(`prima`,user.value);
    user.value = await logout();
    console.log(`dopo`,user.value);
  };

</script>

<template>
  <nav>
    <h1 v-if="user"> {{`Welcome, ${user?.displayName}`}}</h1>
    <button v-if="user" @click="signOut">sign out</button>
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