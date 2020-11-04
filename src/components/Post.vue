<template>
    <div class="post">
        <div class="post__formulario">
            <form class="formulario">
                <textarea v-model="post" placeholder="Publica tu historia"></textarea>
                <button>Publicar</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data() {
        return {
            post: '',
        }
    },
    // created() {
    //     fetch('https://node-api-doctadevs.vercel.app/posts')
    //     .then(res => res.json())
    //     .then(data => {
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // },
}
</script>

<style>

</style>