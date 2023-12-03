<template>
  <div v-show="user" class="card-container">
    <div v-for="(document, index) in documents" :key="document.id" class="card group/card"  @click="showDetails(index)">
      <img class="group-hover/card:scale-110 group-hover/card:rotate-2 group-hover/card:cursor-pointer" :src="document.imgUrl" ref="image"/>
      <div class="content group-hover/card:top-[255px]" ref="content">
        <div class="title">
          <h1>{{ document.title }}</h1>
        </div>
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
  methods: {
    showDetails(index) {
      // on click effects
      this.$refs.content[index].classList.toggle("show-content");
      this.$refs.image[index].classList.toggle("show-img");
      
      // existing hover effects
      this.$refs.content[index].classList.toggle("group-hover/card:top-[255px]");
      this.$refs.image[index].classList.toggle("group-hover/card:scale-110");
      this.$refs.image[index].classList.toggle("group-hover/card:rotate-2");
    },
  },
};

</script>

<style scoped>
.card-container {
  @apply flex justify-evenly items-center flex-wrap container mx-auto gap-8 px-4;
}
.card {
  @apply bg-transparent relative rounded-lg rounded-bl-3xl rounded-tr-3xl w-[350px] h-[350px]
  overflow-hidden p-2 shadow-inner shadow-secondary border-2 border-secondary
  transition-all hover:cursor-pointer;
}
.card img {
  @apply h-full w-full object-cover object-center shadow-md shadow-black rounded-lg rounded-bl-3xl rounded-tr-3xl transition-all;
}
.content {
  @apply absolute top-[300px] left-0 w-full h-full transition-all overflow-hidden;
}
.title
{
  @apply h-12 px-8 py-2 bg-primary-opaque rounded-tr-full w-fit;
}
.title h1 {
  @apply text-2xl font-bold text-white mx-auto;
}
.sub-content {
  @apply bg-primary-opaque p-2 h-full;
}
.tag-list {
  @apply flex flex-row gap-2 flex-wrap text-white h-14 px-2;
}.description {
  @apply text-sm text-white mx-auto p-2 h-[170px] mt-1 border-t-2 border-secondary ;
}
.show-content {
  @apply top-[50px]
}
.show-img {
  @apply scale-110 rotate-2 blur-[1px];
}
</style>
