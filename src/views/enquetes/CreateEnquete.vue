<template>
    <div class="create">
        <form class="enquete" @submit.prevent="handleSubmit">
            <div class="error" >{{ error}}</div>
            <div class="entete">
                <p>
                    ENQUETE ENTREPRISE SUR L’ALIMENTATION EN EAU POTABLE
                    <br>
                    QUESTIONNAIRE
                </p>
            </div>
            <div class="presentation">
                <p>
                    Je m'appelle <strong>{{ enqueteur }}</strong>. Nous réalisons une enquête sur l’alimentation en eau potable.
                </p>
                <p>
                    Votre local / commerce / entreprise a été tirée au sort parmi celles du quartier dans le cadre d’une étude qui porte sur l’alimentation en eau. Nous tenons à préciser que les données personnelles resteront anonymes. Etes-vous d’accord pour répondre à ce questionnaire ?
                </p>
            </div>
            <hr style="margin-bottom: 10px">
            <label >Zone d'equête </label>
            <input type="text" v-model="zoneEnquete" placeholder="Zone d'enquete">

            <div class="entete titre">
                <p>Partie 1: CARACTERISTIQUES DE L’ENTREPRISE</p>
            </div>
            <div class="info">
                <div class="entreprise">
                    <input type="text" placeholder="Nom de l'entreprise " v-model="nomEtreprise">
                    <input type="text" placeholder="Contact de l'entreprise " v-model="contactEtreprise">
                </div>
                <div class="entreprise">
                    <input type="text" placeholder="Nom du repondant " v-model="nomRepondant">
                    <input type="text" placeholder="Contact du repondant (pour l'audit ) " v-model="contactRepondant">
                </div>
                <div class="entreprise">
                    <select v-model="responsabilite">
                        <option value="" required selected >Niveau de responsabilités du répondant dans l’entreprise :</option>
                        <option value="Promoteur de l’entreprise">Promoteur de l’entreprise</option>
                        <option value="Gestionnaire principal">Gestionnaire principal</option>
                        <option value="Responsable des infrastructures">Responsable des infrastructures</option>
                        <option value="Aucun">Aucun</option>
                    </select>
                </div>
                <div class="entreprise">
                    <input type="url" placeholder="Site web de l'entreprise" v-model="siteweb">
                    <input type="email" placeholder="Adresse mail de l'entreprise" v-model="mail">
                    <input type="date" v-model="dateEnquete">
                </div>
            </div>
            <div class=" soustitre">
                <p>SECTEUR D’ACTIVITE</p>
            </div>
            <div class="info">
                <p>
                    Décrivez nous l’activité principale de votre entreprise ? Et secondaire ?
                </p>
                <p>
                    <strong>
                        UN SEUL SECTEUR SELON L’EXPLICATION DU REPONDANT, CLASSEZ L’ENTREPRISE DANS L’UN DES SECTEURS D’ACTIVITES CI-DESSUS (COCHER LE SECTEUR CORRESPONDANT)
                    </strong>
                </p>
                <div class="entreprise">
                    <select required v-model="secteurPrincipal">
                        <option value="" selected>Secteur d'activité principal</option>
                        <option value="Agriculture (matières premières) /élevage/chasse/exploitation forestière/pêche">Agriculture (matières premières) /élevage/chasse/exploitation forestière/pêche</option>
                        <option value="Agro-industrie (transformation)">Agro-industrie (transformation)</option>
                        <option value="Autres Industries">Autres Industries</option>
                        <option value="Banque/finance/assurance">Banque/finance/assurance</option>
                        <option value="Construction/BTP/Aménagement">Construction/BTP/Aménagement</option>
                        <option value="Mine et énergie">Mine et énergie</option>
                        <option value="TIC/IT/Informatique">TIC/IT/Informatique</option>
                        <option value="Santé">Santé</option>
                        <option value="Education (écoles, universités…)">Education (écoles, universités…)</option>
                        <option value="HORECA">HORECA</option>
                        <option value="Sécurité privé">Sécurité privé</option>
                        <option value="Distribution/Commerce (gros et détails)">Distribution/Commerce (gros et détails)</option>
                        <option value="Transport/logistique/ entreposage/ import et export">Transport/logistique/ entreposage/ import et export</option>
                        <option value="Mode, Beauté, Coiffure">Mode, Beauté, Coiffure</option>
                        <option value="Professions libérales (avocats, experts, …)">Professions libérales (avocats, experts, …)</option>
                        <option value="Organisations internationales">Organisations internationales</option>
                        <option value="ONG, Associations, Syndicats">ONG, Associations, Syndicats</option>
                        <option value="Autres">Autres</option>
                        <option value="Aucun">Aucun</option>
                    </select>
                </div>
                <div class="entreprise">
                    <select required     v-model="secteurSecondaire">
                        <option value="" selected>Secteur d'activité secondaire</option>
                        <option value="Agriculture (matières premières) /élevage/chasse/exploitation forestière/pêche">Agriculture (matières premières) /élevage/chasse/exploitation forestière/pêche</option>
                        <option value="Agro-industrie (transformation)">Agro-industrie (transformation)</option>
                        <option value="Autres Industries">Autres Industries</option>
                        <option value="Banque/finance/assurance">Banque/finance/assurance</option>
                        <option value="Construction/BTP/Aménagement">Construction/BTP/Aménagement</option>
                        <option value="Mine et énergie">Mine et énergie</option>
                        <option value="TIC/IT/Informatique">TIC/IT/Informatique</option>
                        <option value="Santé">Santé</option>
                        <option value="Education (écoles, universités…)">Education (écoles, universités…)</option>
                        <option value="HORECA">HORECA</option>
                        <option value="Sécurité privé">Sécurité privé</option>
                        <option value="Distribution/Commerce (gros et détails)">Distribution/Commerce (gros et détails)</option>
                        <option value="Transport/logistique/ entreposage/ import et export">Transport/logistique/ entreposage/ import et export</option>
                        <option value="Mode, Beauté, Coiffure">Mode, Beauté, Coiffure</option>
                        <option value="Professions libérales (avocats, experts, …)">Professions libérales (avocats, experts, …)</option>
                        <option value="Organisations internationales">Organisations internationales</option>
                        <option value="ONG, Associations, Syndicats">ONG, Associations, Syndicats</option>
                        <option value="Autres">Autres</option>
                        <option value="Aucun">Aucun</option>
                    </select>
                </div>
            </div>
            <div class="info">
                <p>
                    <strong>
                        Description des produits / services fournis :
                    </strong>
                </p>
                <div class="entreprise">
                    <input type="text" placeholder="Produits / services :" v-model="serviceFournis">
                    <input type="text" placeholder="Quantités produites / fournies (/ unité temps)" v-model="quantiteFournis">
                </div>
                <small>
                    <p>
                        <span style="color:darkolivegreen;font-weight:bold">
                            Hôtels : Nombre de lits (et taux d’occupation), CHU : Nombre de chambres (et taux d’occupation), Ecoles (nombre d’élèves, nombre de salles de classe) etc
                        </span>
                    </p>
                </small>
            </div>
            <hr>
            <div class=" soustitre">
                <p>FACTEURS DE PRODUCTION DE L’ENTREPRISE</p>
            </div>
            <div class="info">
                <p>
                    <strong>Infrastructures sur le site : nb entrepôts, silos, bâtiments, etc. :</strong>
                </p>
                <p>Nombre d’employés sur le site :</p>
                <div class="entreprise">
                    <input type="text" placeholder="Permanents" v-model="employePermanent">
                    <input type="text" placeholder="Saisonniers" v-model="employeSaisonnier">
                    <input type="text" placeholder="Journaliers" v-model="employeJournalier">
                </div>
                <div class="entreprise">
                    <p >Présence d’une cantine (Si oui, nombre de repas servis par an) :</p>
                    <input type="text" placeholder="Nb Repas servie par an" v-model="nbCantine">
                </div>
                <div class="entreprise">
                    <p >Présence de résidences hébergeant du personnel (Si oui, nb) : </p>
                    <input type="text" placeholder="Nb residence" v-model="nbResidence">
                </div>
            </div>
            <hr>
            <div class=" soustitre">
                <p>PERSPECTIVES ECONOMIQUES</p>
            </div>
            <div class="info">
                <p>
                    <strong>
                        Infrastructures sur le site : nb entrepôts, silos, bâtiments, etc. :
                    </strong>
                </p>
                <div class="entreprise">
                    <p >•	Evolution récente de la production, du chiffre d’affaires (en % de variation, bien préciser la période) : </p>
                    <input type="text" placeholder="Evolution de la production" v-model="evolutionProduction">
                </div>
                <div class="entreprise">
                    <p >•	Perspectives à moyen terme (accroissement de l’activité, du personnel, du CA ? ou stabilisation ?) (bien préciser la période) : </p>
                    <input type="text" placeholder="Perspective moyen terme" v-model="perspectiveMoyenTerme">
                </div>
                <div class="entreprise">
                    <p >•	Raisons (structurelles / conjoncturelles), concurrence : </p>
                    <textarea placeholder="Raisons conjoncturelles / structurelles" v-model="raisonsStructurelle" />
                </div>
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
    import createDocument from '../../controllers/createDocument'
    import getDocument from '../../controllers/getDocument'
    import setDocument from '../../controllers/setDocument'
    import updateDocument from '../../controllers/updateDocument'
    import { doc, getDoc, serverTimestamp } from 'firebase/firestore'
    import { useRoute, useRouter } from 'vue-router'
    import { db, auth } from '../../firebase/config'
    import { onMounted } from '@vue/runtime-core'
    export default {
        props: ['token'],

        setup() {

            const id = ref(null)
            const error = ref(null)
            const p = ref({})
            const enqueteur = ref('')
            const enqueteurId = ref('')
            const zoneEnquete = ref('')
            const nomEtreprise = ref('')
            const contactEtreprise = ref('')
            const nomRepondant = ref('')
            const contactRepondant = ref('')
            const responsabilite = ref('')
            const siteweb = ref('')
            const mail = ref('')
            const dateEnquete = ref('')
            const createdAt = ref('')
            const secteurSecondaire = ref('')
            const secteurPrincipal = ref('')
            const serviceFournis = ref('')
            const quantiteFournis = ref('')
            const employePermanent = ref('')
            const employeSaisonnier = ref('')
            const employeJournalier = ref('')
            const nbResidence = ref('')
            const nbCantine = ref('')
            const evolutionProduction = ref('')
            const perspectiveMoyenTerme = ref('')
            const raisonsStructurelle = ref('')

            const route = useRoute()
            const router = useRouter()
            enqueteur.value = auth.currentUser.displayName

                onMounted( async () => {
                     if( route.params.id ) {
                         error.value = null
                        const { document, getError, load } = getDocument()
                        await load("entreprises", route.params.id)
                        error.value = getError.value
                        if( document.value ) {
                            console.log("Document retrieved : ", document.value)
                            id.value = document.value.id
                            enqueteurId.value = document.value.enqueteurId
                            zoneEnquete.value = document.value.zoneEnquete
                            nomEtreprise.value = document.value.nomEtreprise
                            contactEtreprise.value = document.value.contactEtreprise
                            nomRepondant.value = document.value.nomRepondant
                            contactRepondant.value = document.value.contactRepondant
                            responsabilite.value = document.value.responsabilite
                            siteweb.value = document.value.siteweb
                            mail.value = document.value.mail
                            dateEnquete.value = document.value.dateEnquete
                            createdAt.value = document.value.createdAt

                        }
                        //console.log("enqueteurId : ", enqueteurId.value)
                        await load( "secteurActivites", route.params.id)
                        error.value = getError.value
                        if ( document.value ) {
                            id.value = document.value.id
                            secteurSecondaire.value = document.value.secteurSecondaire
                            secteurPrincipal.value = document.value.secteurPrincipal
                            serviceFournis.value = document.value.serviceFournis
                            quantiteFournis.value = document.value.quantiteFournis
                            employePermanent.value = document.value.employePermanent
                            employeSaisonnier.value = document.value.employeSaisonnier
                            employeJournalier.value = document.value.employeJournalier
                            nbResidence.value = document.value.nbResidence
                            nbCantine.value = document.value.nbCantine
                            evolutionProduction.value = document.value.evolutionProduction
                            perspectiveMoyenTerme.value = document.value.perspectiveMoyenTerme
                            raisonsStructurelle.value = document.value.raisonsStructurelle
                        }
                     }
                })

            const { createError, create } = createDocument()
            const { setError, insert } = setDocument()
            const { updateError, update } = updateDocument()
            const handleSubmit = async () =>{
            if(id.value) {
                //update
                console.log("Updating entreprise .........")
                let entreprise = {
                    enqueteurId: auth.currentUser.email,
                    zoneEnquete: zoneEnquete.value,
                    nomEtreprise: nomEtreprise.value,
                    contactEtreprise: contactEtreprise.value,
                    nomRepondant: nomRepondant.value,
                    contactRepondant: contactRepondant.value,
                    responsabilite: responsabilite.value,
                    siteweb: siteweb.value,
                    mail: mail.value,
                    dateEnquete: dateEnquete.value,
                    //createdAt: createdAt.value
                }
                await update( "entreprises", entreprise, route.params.id)
                error.value = updateError.value

                 const  secteurActivite = {
                    secteurSecondaire: secteurSecondaire.value,
                    secteurPrincipal: secteurPrincipal.value,
                    serviceFournis: serviceFournis.value,
                    quantiteFournis: quantiteFournis.value,
                    employePermanent: employePermanent.value,
                    employeSaisonnier: employeSaisonnier.value,
                    employeJournalier: employeJournalier.value,
                    nbResidence: nbResidence.value,
                    nbCantine: nbCantine.value,
                    evolutionProduction: evolutionProduction.value,
                    perspectiveMoyenTerme: perspectiveMoyenTerme.value,
                    raisonsStructurelle: raisonsStructurelle.value,
                    //createdAt: serverTimestamp()
                }
                await update("secteurActivites", secteurActivite, route.params.id)
                console.log("Secteur Updated ...................................")
                error.value = setError.value
                if(!error.value){
                    router.push( { name: 'Approvisionnement', params: { token: auth.currentUser.accessToken, docId: route.params.id }})
                }

            } else {
                //Create
                console.log(" Not id")
                let entreprise = {
                    enqueteurId: auth.currentUser.email,
                    zoneEnquete: zoneEnquete.value,
                    nomEtreprise: nomEtreprise.value,
                    contactEtreprise: contactEtreprise.value,
                    nomRepondant: nomRepondant.value,
                    contactRepondant: contactRepondant.value,
                    responsabilite: responsabilite.value,
                    siteweb: siteweb.value,
                    mail: mail.value,
                    dateEnquete: dateEnquete.value,
                    createdAt: serverTimestamp()
                }
                //Add entreprise
                const res = await create("entreprises", entreprise)
                error.value = createError.value
                if(error.value){
                    console.log("Error : ", error.value)
                }
                //Add  Secteur activité
                let secteurActivite = {
                    secteurSecondaire: secteurSecondaire.value,
                    secteurPrincipal: secteurPrincipal.value,
                    serviceFournis: serviceFournis.value,
                    quantiteFournis: quantiteFournis.value,
                    employePermanent: employePermanent.value,
                    employeSaisonnier: employeSaisonnier.value,
                    employeJournalier: employeJournalier.value,
                    nbResidence: nbResidence.value,
                    nbCantine: nbCantine.value,
                    evolutionProduction: evolutionProduction.value,
                    perspectiveMoyenTerme: perspectiveMoyenTerme.value,
                    raisonsStructurelle: raisonsStructurelle.value,
                    createdAt: serverTimestamp()
                }
                await insert("secteurActivites", secteurActivite, res.id)
                error.value = setError.value
                if(!error.value){
                    router.push( { name: 'Approvisionnement', params: { token: auth.currentUser.accessToken, docId: res.id }})
                }
            }
            }

            return { handleSubmit, error, id, enqueteur, zoneEnquete,
            nomEtreprise, contactEtreprise, nomRepondant, contactRepondant, responsabilite, siteweb, mail, dateEnquete, secteurSecondaire, secteurPrincipal, serviceFournis, quantiteFournis, employePermanent, employeSaisonnier, employeJournalier, nbResidence, nbCantine, evolutionProduction, perspectiveMoyenTerme, raisonsStructurelle }
        }
    }
</script>

<style>

  button.edit {
    /* display: block;
    margin-top: 30px; */
    background: #12743b;
    /* color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px;
    cursor: pointer; */
  }

</style>
