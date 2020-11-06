<template>
    <div class="home">
        <formulario-publicacion></formulario-publicacion>
        <lista-posts></lista-posts>
    </div>
</template>

<script>
import ListaPosts from '@/components/ListaPosts'
import FormularioPublicacion from '@/components/FormularioPublicacion'

export default {
    name: 'Home',
    components: {
        ListaPosts,
        FormularioPublicacion
    }
}
</script>

<style>

</style>