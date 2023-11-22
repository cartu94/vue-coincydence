<template>
  <div>
    <h1>Home</h1>
    <SignIn v-if="!user" />
    <h2>{{ user != null }}</h2>
  </div>
</template>

<script>
import { ref, onMounted, inject } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import SignIn from '../components/SignIn.vue';

export default {
  components: {
    SignIn
  },
  setup() {
    const user = inject('user');
    const auth = inject('auth');

    onMounted(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          user.value = user;
        }
      });
    });

    return { user };
  }
};
</script>