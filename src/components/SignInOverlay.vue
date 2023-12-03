<script setup>
import { loginWithGoogleRedirect } from "../firebase/authService";
import { inject } from "vue";

const user = inject("user");

const signInWithGoogle = async () => {
  try {
    if (user.value) return;
    await loginWithGoogleRedirect();
  } catch (error) {
    console.error("Error during Google sign-in", error);
  }
};
</script>

<template>
  <div class="overlay">
    <div class="btnContainer">
      <button @click="signInWithGoogle">sign in with google</button>
    </div>
  </div>
</template>

<style scoped>
.btnContainer {
  @apply transition-all hover:scale-110 p-2 hover:border-secondary hover:border-2 rounded-full;
  animation: slideIn 1s ease-in;
}
button {
  @apply bg-secondary px-8 py-4 uppercase rounded-full font-bold text-black text-sm sm:text-xl transition-all hover:animate-[scale];
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) 0.9s infinite;
}
.overlay {
  @apply flex justify-center h-full w-full items-center fixed top-0 left-0 bg-black z-10;
}

@keyframes slideIn {
  0% {
    transform: translateY(-100vh);
  }
  70% {
    transform: translateY(5vh);
  }
  85% {
    transform: translateY(-2vh);
  }
  100% {
    transform: translateY(0%);
  }
}

@keyframes pulse {
  50% {
    box-shadow: 0 0 0 15px rgba(100, 100, 100, 0.3);
  }
}
</style>
