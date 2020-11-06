<template>
    <div class="feed">
        <formulario-publicacion></formulario-publicacion>
        <lista-posts-user></lista-posts-user>
    </div>
</template>

<script>
import FormularioPublicacion from '@/components/FormularioPublicacion'
import ListaPostsUser from '@/components/ListaPostsUser'

export default {
    name: 'Feed',
    components: {
        FormularioPublicacion,
        ListaPostsUser
    }
}
</script>

<style>

</style>