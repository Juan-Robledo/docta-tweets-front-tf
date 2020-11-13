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

</style>