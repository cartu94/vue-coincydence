<script setup>
  import { getAuth, signOut } from '@firebase/auth';
  import { provide, ref } from 'vue';
  
  const user = ref(null);
  const auth = getAuth();

  provide('user', user);
  provide('auth', auth);

  const logOut = async () => {
    await signOut(auth);
    user.value = null;
  }
</script>

<template>
  <nav>
    <h1 v-if="user!=null"> {{`Welcome, ${user?.displayName}`}}</h1>
    <button v-if="user!=null" @click="logOut">sign out</button>
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
    @apply bg-blue-500 text-white px-4 py-2 uppercase rounded-full;
  }
</style>