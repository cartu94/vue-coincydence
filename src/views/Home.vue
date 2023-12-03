<template>
  <div v-if="user" class="bg-red-500 flex justify-between items-center">
    <div v-for="document in documents" :key="document.id" class="card">
      <img :src="document.imgUrl" />
      <h1>{{ document.title }}</h1>
      <p>{{ document.description }}</p>
      <div>
        <p v-for="tag in document.tagList" :key="tag">{{ tag }}</p>
      </div>
    </div>
  </div>
  <LoadingModal v-else-if="loading" />
  <SignIn v-else />
</template>

<script>
import { inject, ref } from "vue";
import SignIn from "../components/SignInOverlay.vue";
import LoadingModal from "../components/LoadingOverlay.vue";
import { onAuthChange } from "../firebase/authService";
import { getDocuments } from "../firebase/firestoreService";

const documents = ref([]);

async function get() {
  try {
    documents.value = await getDocuments();
  } catch (error) {
    console.error("Error fetching documents:", error);
  }
}

export default {
  components: {
    SignIn,
    LoadingModal,
  },
  setup() {
    const user = inject("user");
    const loading = ref(true);

    onAuthChange(async (firebaseUser) => {
      console.log(`Home → onAuthChange user:`, user.value);
      console.log(`Home → onAuthChange firebaseUser:`, firebaseUser);
      try {
        loading.value = true;
        if (firebaseUser) {
          user.value = firebaseUser;
          await get();
        } else {
          console.log("Not logged in");
        }
      } catch (error) {
        console.error("Error in onAuthChange:", error);
      } finally {
        loading.value = false;
        console.log(`Home → onAuthChange end user:`, user.value);
      }
    });

    return { user, loading, documents };
  },
};
</script>

<style scoped>
button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
button:hover {
  background-color: #000000;
}
.card {
  background-color: #ffffff;
  border-radius: 25px;
  border: 2px solid #000000;
  display: inline-block;
  margin: 10px;
  width: 300px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card div {
  @apply flex flex-row justify-center gap-1 items-center bg-blue-400;
}
.card div p {
  @apply text-white bg-fuchsia-400;
}
</style>
