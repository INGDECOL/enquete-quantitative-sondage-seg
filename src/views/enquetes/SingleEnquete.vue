<template>
    <div class="enquete" v-if="enquete">
        <div class="actions">
            <h3 @click="showDetails = !showDetails">{{ enquete.nomEtreprise }}</h3>
            <div class="icons">
                <!-- <router-link> -->
                    <span class="material-icons">description</span>
                <!-- </router-link> -->
                <span class="material-icons strash">delete</span>
            </div>

        </div>
        <div class="details" v-if="showDetails">
            <h4>Contact : {{ enquete.contactEtreprise}} / SiteWeb :  {{ enquete.siteweb}} / Adresse mail :  {{ enquete.mail }}</h4>
            <h6><small>Date d'enquête : {{ enquete.dateEnquete}}</small></h6>

        </div>
    </div>
    <div v-else class="error">Vous n'avez Enregistrer aucune donnée d'enquete</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
    props: [ 'enquete'],
    setup( props) {
        const showDetails = ref(false)
        return { showDetails }
    }

}
</script>

<style>

</style>
