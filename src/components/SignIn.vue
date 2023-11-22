<script setup>
  import { onMounted, inject } from 'vue';
  import { GoogleAuthProvider, signInWithRedirect, getRedirectResult } from "firebase/auth";
  
  const user = inject('user');
  const auth = inject('auth');

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  }

  onMounted(() => {
    getRedirectResult(auth)
      .then((result) => {
        user.value = result.user;
        console.log(user.value.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  });

</script>

<template>
  <div class="overlay">
    <button @click="signInWithGoogle">sign with google</button>
  </div>
</template>

<style scoped>
  h1 {
    @apply text-4xl;
  }
  button {
    @apply bg-blue-500 text-white px-4 py-2 uppercase rounded-full z-10;
  }
  .overlay {
    @apply flex justify-center h-full w-full items-center fixed top-0 left-0 bg-black bg-opacity-90;
  }
</style>