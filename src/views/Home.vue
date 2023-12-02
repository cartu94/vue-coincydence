<template>
  <div v-show="user" class="card-container">
    <div v-for="document in documents" :key="document.id" class="card group/card">
      <img class="group-hover/card:scale-110 group-hover/card:rotate-2 group-hover/card:cursor-pointer" :src="document.imgUrl" />
      <div class="content group-hover/card:top-[250px]">
        <h1>{{ document.title }}</h1>
        <div class="sub-content">
          <div class="tag-list">
            <p v-for="tag in document.tagList" :key="tag">{{ tag }}</p>
          </div>
          <div class="description">{{ document.description }}</div>
        </div>
      </div>
    </div>
  </div>
  <LoadingModal v-show="loading" />
  <SignIn v-show="!user && !loading" />
</template>

<script>
import { inject, ref } from "vue";
import SignIn from "../components/SignInOverlay.vue";
import LoadingModal from "../components/LoadingOverlay.vue";
import { onAuthChange, handleRedirectResult } from "../firebase/authService";
import { getDocuments } from "../firebase/firestoreService";
import { auth } from "../firebase";

const documents = ref([]);
async function get() {
  documents.value = await getDocuments();
}

export default {
  components: {
    SignIn,
    LoadingModal,
  },
  setup() {
    const user = inject("user");
    const loading = inject("loading");

    onAuthChange(async () => {
      loading.value = true;
      console.log(`Home → onAuthChange user: ${user.value}`);
      console.log(`Home → onAuthChange currentUser: ${auth.currentUser}`);
      try {
        let tmpUsr = await handleRedirectResult();
        console.log(`Home → handleRedirectResult: ${tmpUsr}`);
        if (tmpUsr) {
          user.value = tmpUsr.user;
          await get();
        } else {
          console.log("Not logged in");
        }
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    });

    return { user, loading, documents };
  },
};

</script>

<style scoped>
.card-container {
  @apply flex justify-evenly items-center flex-wrap container mx-auto;
}
.card {
  @apply bg-transparent relative rounded-xl rounded-bl-3xl w-[350px] h-[350px]
  overflow-hidden p-2 shadow-inner shadow-secondary border-2 border-secondary
  transition-all hover:cursor-pointer;
}
.card img {
  @apply h-full w-full object-cover object-center shadow-md shadow-black rounded-xl transition-all;
}
.content {
  @apply absolute top-[300px] left-0 w-full h-full transition-all;
}
.card h1 {
  @apply text-2xl font-bold text-white w-fit min-w-[175px] bg-secondary-opaque rounded-tr-full 
  text-center pr-6 pt-2 pb-2;
}
.sub-content {
  @apply bg-secondary-opaque p-2 h-full;
}
.tag-list {
  @apply flex flex-row gap-2 items-start flex-wrap text-white h-14 border-b border-b-secondary;
}.description {
  @apply text-sm text-white mx-auto h-[185px] py-1;
}

.show {
  @apply opacity-0;
  animation: fadeIn 1s ease-in;
}
</style>
