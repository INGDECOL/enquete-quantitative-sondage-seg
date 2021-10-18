<template>
<header>
  <h1>Liste des enquetes</h1>
  <button @click="newEnquete">Nouveau</button>

</header>
  <div class="enquete-liste">
      <div v-for="enquete in documents" :key="enquete.id">
          <SingleEnquete :enquete="enquete" />
      </div>
      <div class="error">{{ error }}</div>
  </div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'
import SingleEnquete from './SingleEnquete.vue'
import getDocuments from '../../controllers/getDocuments'
import { onMounted } from '@vue/runtime-core'
export default {
    //props: ['enquetes'],
    components: { SingleEnquete },
    setup () {
        const error = ref(null)
        const router = useRouter()
        const token = ref(auth.currentUser.accessToken)
        const newEnquete = () => {
            router.push( { name: 'Create', params: { token: token.value }})
        }
        const { documents, getError, load } = getDocuments()
        error.value = null
        load("entreprises")
        // const d = computed(async () => {
        //     load("entreprises")
        //     enquetes.value = documents.value
        // })
        error.value = getError.value
        console.log("Documents on EnqueteListe : ", documents.value)
        return { newEnquete,  error, documents, getError  }
    }
}
</script>

<style>

</style>
