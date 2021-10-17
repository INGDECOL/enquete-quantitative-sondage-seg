<template>
  <h1>Liste des enquetes</h1>
  <button @click="newEnquete">Nouveau</button>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from 'vue-router'
import { auth } from '../../firebase/config'
export default {

    setup () {
        const router = useRouter()
        const token = ref(auth.currentUser.accessToken)
        const newEnquete = () => {
            router.push( { name: 'Create', params: { token: token.value }})
        }
        return { newEnquete }
    }
}
</script>

<style>

</style>
