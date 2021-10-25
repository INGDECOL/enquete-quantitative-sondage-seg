<template>
    <div class="enquete" v-if="enquete">
        <div class="actions">
            <h3 @click="showDetails = !showDetails" >{{ enquete.nomEtreprise }}</h3>
            <div class="icons">
                <router-link :to="{ name: 'Create', params: {token: token, id: enquete.id}}">
                    <span class="material-icons">description</span>
                </router-link>
                <span class="material-icons strash " :class="{disabled: enquete.enqueteurId != userEmail }" @click="handleDelete(enquete)">delete</span>
            </div>

        </div>
        <div class="details" v-if="showDetails">
            <h4 >Zone de {{ enquete.zoneEnquete}}</h4>
            <h4>Contact : {{ enquete.contactEtreprise}} / SiteWeb :  {{ enquete.siteweb}} / Adresse mail :  {{ enquete.mail }} </h4>
            <h6><small>Date d'enquête : {{ enquete.dateEnquete}}</small></h6>

        </div>
    </div>
    <div v-else class="error">Vous n'avez Enregistrer aucune donnée d'enquete</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import { auth } from '../../firebase/config'
import destroyDocument from '../../controllers/destroyDocument'

export default {
    props: [ 'enquete'],
    setup( props) {
        const showDetails = ref(false)
        const userEmail = auth.currentUser.email
        const token = ref(auth.currentUser.accessToken)
        const { destroy, error} = destroyDocument()
        // console.log("accessToken : ", props.enquete)
        const handleDelete = (enq) => {
            if(enq.enqueteurId == auth.currentUser.email ) {
                if ( confirm("Voulez-vous supprimer cet document et tous les sous documents liés ?? Cette action est definitive !!")) {
                    destroy("entreprises", enq.id)
                }
                // alert("Element à supprimer : " + enq.zoneEnquete + " ... " +enq.nomEtreprise+ " ... " + enq.enqueteurId + " ... " + auth.currentUser.email )

            }else {
                alert("Vous n'êtes pas autorisé à supprimer cet element !! " )
            }
        }
        return { showDetails, token, userEmail, handleDelete, error }
    }

}
</script>

<style>

</style>
