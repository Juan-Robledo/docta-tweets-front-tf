<template>
    <div class="feed">
        <formulario-publicacion />
        <lista-posts :URL='URL'/>
    </div>
</template>

<script>
import FormularioPublicacion from '@/components/FormularioPublicacion'
import ListaPosts from '@/components/ListaPosts'

export default {
    name: 'Feed',
    props: {
        masterURL: String
    },
    components: {
        FormularioPublicacion,
        ListaPosts
    },
    data() {
        return {
            URL: `${this.masterURL}/users/${this.$route.params.username}/posts`
        }
    },
}
</script>

<style>

</style>