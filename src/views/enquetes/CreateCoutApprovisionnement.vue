<template>
    <navbar />
    <div class="create">
        <form  class="enquete" @submit.prevent="handleSubmit">
            <div class="error" v-if="error">{{ error}}</div>
            <div class="entete">
                <p>
                    ENQUETE ENTREPRISE SUR L’ALIMENTATION EN EAU POTABLE
                    <br>
                    QUESTIONNAIRE
                </p>
            </div>
            <div class="entete titre">
                <p>PARTIE 3 : COÛT DE L’APPROVISIONNEMENT EN EAU</p>
            </div>
            <p>
                Appréciation sur le coût de l’eau pour l’entreprise (par rapport au chiffre d’affaires)
            </p>
            <div class="entreprise">
                <select required v-model="appreciationCout">
                    <option value="" selected>Appréciation sur le coût de l’eau pour l’entreprise </option>
                    <option value="élévé">Elévé</option>
                    <option value="raisonnable">Raisonnable</option>
                    <option value="faible">faible</option>

                </select>
            </div>
            <div class="entreprise">
                <textarea placeholder="Appréciation sur le coût de l’eau pour l’entreprise" v-model="commentaireAppreciationCout" />
            </div>
            <p>Appréciation sur le prix de l’eau facturé par SEG (prix par m3) (prix « théorique »)</p>
            <div class="entreprise">
                <textarea placeholder="Appréciation sur le prix de l’eau facturé par SEG (prix par m3)" v-model="commentaireAppreciationPrix" />
            </div>
            <p>Appréciation sur le prix de l’eau facturé par SEG par rapport au service effectivement fourni</p>
            <div class="entreprise">
                <textarea placeholder="Appréciation sur le prix de l’eau facturé par SEG /% au service effectivement fourni" v-model="commentaireServiceFourni" />
            </div>
            <p>Commentaires sur les changements notés dans le service SEG dans les derniers mois (années ?) </p>
            <div class="entreprise">
                <textarea placeholder="Commentaires sur les changements notés dans le service SEG " v-model="commentaireChangement" />
            </div>
            <p>Commentaires sur les améliorations souhaitables / impératives du service de la SEG</p>
            <div class="entreprise">
                <textarea placeholder="Commentaires sur les changements notés dans le service SEG " v-model="commentaireAmelioration" />
            </div>
            <hr>
            <div class="error">{{ error }}</div>
            <div class="button">
                <button>{{ id ? 'Modifier' : 'Enregistrer'}}</button>
            </div>
        </form>
    </div>
</template>

<script>
    import {  ref } from '@vue/reactivity'
    import updateDocument from '../../controllers/updateDocument'
    import getDocument from '../../controllers/getDocument'
    import setDocument from '../../controllers/setDocument'
    import { serverTimestamp } from 'firebase/firestore'
    import { useRoute, useRouter } from 'vue-router'
    import { db, auth } from '../../firebase/config'
    import { onMounted } from '@vue/runtime-core'
import Navbar from '../../components/Navbar.vue'
    export default {
        components: { Navbar },

         props: ['token'],
         setup() {
            const id = ref(null)
            const error = ref(null)
            const p = ref({})
            const enqueteur = ref('')
            const appreciationCout = ref('')
            const commentaireAppreciationCout = ref('')
            const commentaireAppreciationPrix = ref('')
            const commentaireServiceFourni = ref('')
            const commentaireChangement = ref('')
            const commentaireAmelioration = ref('')


            const route = useRoute()
            const router = useRouter()
            enqueteur.value = auth.currentUser.displayName

            onMounted( async () =>{
                console.log(" onMounted ", route.params.docId)
                if(route.params.docId){
                    const { document, getError, load } = getDocument()

                    await load("coutapprovisionnements", route.params.docId)
                    if( getError.value ) {error.value = "Enregistrement non trouvé ! "}
                    // error.value = getError.value
                    if(document.value) {
                        console.log(" coutapprovisionnement res :", document.value.id)
                        // Charger les données
                        id.value = document.value.id
                        appreciationCout.value = document.value.appreciationCout
                        commentaireAppreciationCout.value = document.value.commentaireAppreciationCout
                        commentaireAppreciationPrix.value = document.value.commentaireAppreciationPrix
                        commentaireServiceFourni.value = document.value.commentaireServiceFourni
                        commentaireChangement.value = document.value.commentaireChangement
                        commentaireAmelioration.value = document.value.commentaireAmelioration

                    }
                }
            })

            //const { createError, create } = createDocument()
            const { updateError, update } = updateDocument()
            const { setError, insert } = setDocument()
            const handleSubmit = async () =>{
                if(id.value) {
                    //update
                    error.value = null
                   let coutapprovisionnement = {
                        appreciationCout : appreciationCout.value,
                        commentaireAppreciationCout : commentaireAppreciationCout.value,
                        commentaireAppreciationPrix : commentaireAppreciationPrix.value,
                        commentaireServiceFourni : commentaireServiceFourni.value,
                        commentaireChangement : commentaireChangement.value,
                        commentaireAmelioration : commentaireAmelioration.value,

                        //createdAt: serverTimestamp()
                    }
                    //Update coutapprovisionnements
                   await update("coutapprovisionnements", coutapprovisionnement, route.params.docId)
                    error.value = updateError.value
                    console.log("appro data : ", coutapprovisionnement)
                    if(!error.value){
                        router.push( { name: 'EnqueteList', params: { token: auth.currentUser.accessToken }})
                    }

                } else {
                    //Create
                    error.value = null
                    console.log(" Not id")
                    let coutapprovisionnement = {
                        appreciationCout : appreciationCout.value,
                        commentaireAppreciationCout : commentaireAppreciationCout.value,
                        commentaireAppreciationPrix : commentaireAppreciationPrix.value,
                        commentaireServiceFourni : commentaireServiceFourni.value,
                        commentaireChangement : commentaireChangement.value,
                        commentaireAmelioration : commentaireAmelioration.value,
                        createdAt: serverTimestamp()
                    }
                    //Add coutapprovisionnements
                    const res = await insert("coutapprovisionnements", coutapprovisionnement, route.params.docId)
                    error.value = setError.value
                    //console.log("coutappro data : ", coutapprovisionnement)
                    if(!error.value){
                        router.push( { name: 'EnqueteList', params: { token: auth.currentUser.accessToken }})
                    }
                }
            }
            return { handleSubmit, error, id, enqueteur, appreciationCout, commentaireAppreciationCout, commentaireAppreciationPrix, commentaireServiceFourni, commentaireChangement, commentaireAmelioration }
        }

    }
</script>

<style>

</style>
