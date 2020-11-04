<template>
    <div class="boton__eliminar__post">
        <button><i class="fas fa-trash-alt"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonEliminarPost',
    data() {
        return {
            // deletePost = true,
        }
    },
    // methods: {
    //     removePost(){
    //         fetch('https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}', {
    //             body: {
    //                 "autor": "USERNAME"
    //                 }
    //         })
    //         .then(res => {
    //             return res.json()
    //             })
    //         .then(data => {
    //             this.deletePost = data;
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // },
    // created() {
    //     fetch('https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}')
    //         body = {
    //             "autor": "USERNAME"
    //             }
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