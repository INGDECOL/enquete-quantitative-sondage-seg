<template>
    <div class="enquete" v-if="enquete">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{ enquete.nomEtreprise }}</h3>
            <div class="icons">
                <router-link :to="{ name: 'Create', params: {token: token, id: enquete.id}}">
                    <span class="material-icons">description</span>
                </router-link>
                <span class="material-icons strash">delete</span>
            </div>

        </div>
        <div class="details" v-if="showDetails">
            <h4>Zone de {{ enquete.zoneEnquete}}</h4>
            <h4>Contact : {{ enquete.contactEtreprise}} / SiteWeb :  {{ enquete.siteweb}} / Adresse mail :  {{ enquete.mail }}</h4>
            <h6><small>Date d'enquête : {{ enquete.dateEnquete}}</small></h6>

        </div>
    </div>
    <div v-else class="error">Vous n'avez Enregistrer aucune donnée d'enquete</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../../firebase/config'

export default {
    props: [ 'enquete'],
    setup( props) {
        const showDetails = ref(false)
        const token = ref(auth.currentUser.accessToken)
        console.log("accessToken : ", token)
        return { showDetails, token }
    }

}
</script>

<style>

</style>
