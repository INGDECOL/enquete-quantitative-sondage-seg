<template>
    <div>
      <form @submit.prevent="handleSubmit">
        <h2 style="text-align: center">Nouveau compte</h2>
        <input type="text" required placeholder="Nom complet" v-model="displayName">
        <input type="tel" v-model="phoneNumber" placeholder="Numero de telephone">
        <input type="email" required placeholder="Email" v-model="email">
        <input type="password" required placeholder="choisir le mot de passe" v-model="password">
        <select required placeholder="Selection le type" v-model="fonction">
          <option value="" selected>Selectionner le type </option>
          <option value="Administrateur">Administrateur</option>
          <option value="Superviseur">Superviseur</option>
          <option value="Enqueteur">Enqueteur</option>
        </select>
        <div class="error">{{ signUpError}}</div>
        <button>Valider</button>

        <div class="redirect">Vous avez déjà un compte ? <router-link :to="{ name: 'SignIn'}">Connectez vous </router-link> alors .</div>
      </form>
    </div>
</template>

<script>
import { ref } from "vue";
import useSignUp from "../../controllers/useSignUp"
import { useRouter } from 'vue-router';

export default {
  setup () {
    const router = useRouter
    const email = ref('')
    const password = ref('')
    const displayName = ref('')
    const phoneNumber = ref('')
    const fonction = ref('')
    const superviseur = ref('')
    const { signUp, signUpError } = useSignUp()

      const handleSubmit = async () => {
        let data = {
          displayName: displayName.value,
          email: email.value,
          password: password.value,
          fonction: fonction.value,
          phoneNumber: phoneNumber.value,
          superviseur: superviseur.value
        }
        const res = await signUp(data)
        if(!signUpError.value) {
          router.push( { name: 'Home'})
        }else  console.log(" signUpError :" , signUpError)
        console.log(" res : ", res)
      }
  return { displayName, phoneNumber, email, password, fonction, superviseur, handleSubmit, signUpError }
  }
}
</script>

<style>

</style>
