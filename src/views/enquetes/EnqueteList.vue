<template>
  <h1>Liste des enquetes</h1>
  <div class="enquete-liste">
      <div v-for="enquete in enquetes" :key="enquete.id">
          <SingleEnquete :enquete="enquete" />
      </div>
      <div class="error">{{ error }}</div>
  </div>
  <button @click="newEnquete">Nouveau</button>
</template>

<script>
import { ref } from '@vue/reactivity'
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
        const enquetes = ref([])
        const router = useRouter()
        const token = ref(auth.currentUser.accessToken)
        const newEnquete = () => {
            router.push( { name: 'Create', params: { token: token.value }})
        }
        const { documents, getError, load } = getDocuments()
        error.value = null

        const d = onMounted(async () => {
            await load("entreprises")
            enquetes.value = documents.value
        })
         error.value = getError.value
        console.log("Documents : ", enquetes.value)
        return { newEnquete, enquetes, error  }
    }
}
</script>

<style>

</style>
