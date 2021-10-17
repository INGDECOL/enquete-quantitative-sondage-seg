<template>
  <header>
        <h1>ENQUETE QUNATITATIVE - SONDAGE SEG</h1>
        <nav>
            <router-link :to="{ name: 'Home' }">Home</router-link>
            <router-link :to="{ name: 'SignIn' }" v-if="!user">Login</router-link>
            <!-- <router-link :to="{ name: 'SignUp' }" v-else>Register</router-link> -->
            <router-link :to="{ name: 'EnqueteList', params:{ token: token}}" v-if="user">Enquetes</router-link>
            <span @click="signOut" v-if="user">Logout</span>
        </nav>
    </header>
</template>

<script>
import { ref } from '@vue/reactivity'
import { useRouter } from "vue-router";
import getToken from '../controllers/getToken'
import { auth } from '../firebase/config'
import useLogout from '../controllers/useLogout'
export default {
    setup () {
        const user = ref(auth.currentUser)
        const { logout, error } = useLogout()
        const  token = ref(null)
        const router = useRouter()
        auth.onAuthStateChanged((_user) =>{
            user.value = _user
            token.value = user.value && user.value.accessToken
        })
        //console.log("accessToken : ", token.value)
        const signOut = async () =>{
            await logout()
            if(!error.value){
                router.push({ name: 'Home'})
            }else console.log(error.value)
        }
        return { token, user, signOut}

    }

}
</script>

<style>

</style>
