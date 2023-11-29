<script setup>
import { loginWithGoogleRedirect } from "../firebase/authService";

const signInWithGoogle = async () => {
  loginWithGoogleRedirect();
};
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
  @apply bg-[var(--g-blue)] text-white px-8 py-4 uppercase rounded-full font-bold text-xl hover:scale-110 transition-all hover:outline;
}
.overlay {
  @apply flex justify-center h-full w-full items-center fixed top-0 left-0 bg-black bg-opacity-90;
}
</style>
