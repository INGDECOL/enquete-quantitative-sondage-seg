<template>
<navbar />
<header>
  <h1>Liste des enquetes</h1>
  <button @click="newEnquete">Nouveau</button>

</header>
  <div class="enquete-liste" v-if="documents.length">
      <div v-for="enquete in documents" :key="enquete.id" >
          <SingleEnquete :enquete="enquete" />
      </div>
  </div>
  <div v-else><Spinner /></div>
  <div class="error">{{ error }}</div>
</template>

<script>
import { computed, ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'
import SingleEnquete from './SingleEnquete.vue'
import Spinner from '../../components/Spinner.vue'
import getDocuments from '../../controllers/getDocuments'
import { onMounted } from '@vue/runtime-core'
import Navbar from '../../components/Navbar.vue'
export default {
    //props: ['enquetes'],
    components: { SingleEnquete, Spinner, Navbar },
    setup () {
        const error = ref(null)
        const router = useRouter()
        const token = ref(auth.currentUser.accessToken)
        const newEnquete = () => {
            router.push( { name: 'Create', params: { token: token.value }})
        }
        const { documents, getError, load } = getDocuments()
        onMounted ( async () => {
            error.value = null
            await load("entreprises")
            error.value = getError.value
            // console.log("Liste documents : ", documents.value)

        })
        return { newEnquete,  error, documents, getError  }
    }
}
</script>

<style>

</style>
