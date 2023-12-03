<script setup>
import { provide, ref } from "vue";
import { logout } from "./firebase/authService";
import { auth } from "./firebase";

const user = ref(null);

provide("user", user);

const signOut = async () => {
  try {
    console.log("signOut");
    console.log(`Before sign out:`, user.value);
    console.log(`Before sign out:`, auth.currentUser);
    user.value = await logout();
    console.log(`After sign out:`, user.value);
    console.log(`After sign out:`, auth.currentUser);
  } catch (error) {
    console.error("Error during sign out:", error);
  }
};
</script>

<template>
  <nav>
    <h1 v-if="user">{{ `Welcome, ${user.displayName || "Error"}` }}</h1>
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
