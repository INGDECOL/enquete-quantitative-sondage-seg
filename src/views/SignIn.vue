<template>
<navbar />
<div class="content">
  <form @submit.prevent="handleSubmit">
      <h2 style="text-align: center">Connectez vous</h2>
      <input type="email"  required placeholder="email" v-model="email">
      <input type="password" required placeholder="Mot de passe " v-model="password">
      <div class="error" v-if="signError">{{ signError }}</div>
      <div class="button">
        <button >Se connecter</button>
      </div>
      <div class="redirect">Vous nouveau ici ? <span><router-link :to="{ name: 'SignUp'}">Créer un compte </router-link></span> alors .</div>
  </form>
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
import useSignIn from "../controllers/useSignIn";
import { useRouter } from 'vue-router'
import getToken from "../controllers/getToken";
import Navbar from '../components/Navbar.vue';
export default {
  components: { Navbar },
    setup() {
        const router = useRouter()
        const email = ref('')
        const password = ref('')
        const { token } = getToken()
        const { auth, signIn, signError } = useSignIn()
        const handleSubmit = async () => {
            await signIn(email.value, password.value)

            if(!signError.value) {
                console.log( "user logged In")
                router.push( { name: 'EnqueteList', params: { token: token.value }})
            }else  console.log(" console.error() :" , signError)
        }
        return { email, password, handleSubmit, signError }
    }
}
</script>

<style>

</style>
