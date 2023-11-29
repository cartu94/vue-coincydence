<template>
  <!-- <button v-if="user" @click="add()">
    aggiungi
  </button> -->
  <div v-if="user" class="bg-red-500 flex justify-between items-center">
    <div v-for="document in documents" :key="document.id" class="card">
      <img :src="document.imgUrl" />
      <h1>{{document.title}}</h1>
      <p>{{document.description}}</p>
      <div>
        <p v-for="tag in document.tagList" :key="tag">{{tag}}</p>
      </div>
    </div>
  </div>
  <LoadingModal v-else-if="loading" />
  <SignIn v-else />
</template>

<script>
import { inject, ref } from 'vue';
import SignIn from '../components/SignInOverlay.vue';
import LoadingModal from '../components/LoadingOverlay.vue';
import { onAuthChange, handleRedirectResult } from '../firebase/authService';
import { addDocument, getDocuments } from '../firebase/firestoreService';
import { auth } from '../firebase';

const documents = ref([]);
let item = {
  imgUrl: 'https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title : 'Test2',
  description : "lorem ipsum dolor sit amet",
  tagList : ['#test4', '#test3', '#test1'],
}
// async function add() {
//   let it = await addDocument(item);
//   alert(`added ${it.id}`);
// }
async function get() {
  documents.value = await getDocuments();
}

export default {
  components: {
    SignIn,
    LoadingModal
  },
  setup() {
    const user = inject('user');
    const loading = inject('loading');

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
          console.log('Not logged in');
        }
      } catch (error) {
        console.log(error);
      }
      loading.value = false;
    });

    return { user, loading, documents };
  }
};
</script>

<style scoped>
  button {
    background-color: #4CAF50;
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
    background-color: #FFFFFF;
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