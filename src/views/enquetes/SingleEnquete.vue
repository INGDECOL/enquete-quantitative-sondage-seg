<template>
    <div class="enquete" v-if="enquete">
        <h3>{{ enquete.nomEtreprise}}</h3>
        <h2>{{ enquete.contactEtreprise}}</h2>
    </div>
    <div v-else>Vous n'avez Enregistrer aucune donnée d'enquete</div>
</template>

<script>
export default {
    props: [ 'enquete'],
    setup( props) {
            
        return { }
    }

}
</script>

<style>

</style>
