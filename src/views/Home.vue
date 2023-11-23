<template>
  <div>
    <h1>Home</h1>
    <div v-if="user">Welcome, {{ user.displayName }}</div>
    <LoadingModal v-else-if="loading" />
    <SignIn v-else />
    <h2>{{ user != null }}</h2>
  </div>
</template>

<script>
import { onMounted, inject } from 'vue';
import SignIn from '../components/SignInOverlay.vue';
import LoadingModal from '../components/LoadingOverlay.vue';
import { observeAuthState } from '../firebase/authService';

export default {
  components: {
    SignIn,
    LoadingModal
  },
  setup() {
    const user = inject('user');
    const loading = inject('loading');

    onMounted(() => {
      loading.value = true;
      observeAuthState((currentUser) => {
        user.value = currentUser;
        if (currentUser) {
          console.log(`Logged in as: ${user.value.displayName}`);
        } else {
          console.log('Not logged in');
        }
        loading.value = false;
      });
    });

    return { user, loading };
  }
};
</script>