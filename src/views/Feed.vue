<template>
    <div class="feed">
        <post></post>
        <boton-eliminar-post></boton-eliminar-post>
        <boton-like></boton-like>
    </div>
</template>

<script>
import Post from '@/components/Post'
import BotonEliminarPost from '@/components/BotonEliminarPost'
import BotonLike from '@/components/BotonLike'

export default {
    name: 'Feed',
    components: {
        Post,
        BotonEliminarPost,
        BotonLike
    }
}
</script>

<style>

</style>