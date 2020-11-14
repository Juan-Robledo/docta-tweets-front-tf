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
    .feed{
        width: 1120px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
    }
    @media screen and (max-width: 770px) {
        .feed{
            width: 80%;
        }
    }
    @media screen and (max-width: 320px) {
        .feed{
            width: 50%;
        }
    }
</style>