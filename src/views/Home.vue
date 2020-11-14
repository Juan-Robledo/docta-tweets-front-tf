<template>
    <div class="home">
        <formulario-publicacion :URL='URL'/>
        <lista-posts :URL='URL'/>
    </div>
</template>

<script>
import ListaPosts from '@/components/ListaPosts'
import FormularioPublicacion from '@/components/FormularioPublicacion'

export default {
    name: 'Home',
    props: {
        masterURL: String
    },
    components: {
        ListaPosts,
        FormularioPublicacion
    },
    data() {
        return {
            URL: `${this.masterURL}/posts`
        }
    },
}
</script>

<style>
    .home{
        width: 1120px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
    }
    @media screen and (max-width: 770px) {
        .home{
            width: 80%;
        }
    }
    @media screen and (max-width: 320px) {
        .home{
            width: 50%;
        }
    }
</style>