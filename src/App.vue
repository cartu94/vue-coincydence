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
    <h1 v-if="user">{{ `Welcome, ${user?.displayName}` }}</h1>
    <button v-if="user" @click="signOut" class="group">
      <svg class="group-hover:fill-white group-hover:scale-150"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2H5Zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5l-5 5Z"
        />
      </svg>
    </button>
  </nav>
  <router-view />
</template>

<style scoped>
nav {
  @apply bg-primary flex sm:justify-center h-[70px] items-center shadow shadow-secondary border-b-2 border-secondary fixed top-0 left-0 w-full z-10;
}
nav h1 {
  @apply text-2xl sm:text-4xl sm:mt-2 ml-4 sm:ml-0 text-secondary font-bold font-cursive overflow-visible select-none;
}
nav button {
  @apply p-2 rounded-full border-2 border-secondary hover:scale-125 transition-all pl-3 fixed right-6 sm:right-20 hover:bg-secondary-opaque;
}
nav button svg {
  @apply w-full h-full transition-transform fill-secondary;
}
</style>
