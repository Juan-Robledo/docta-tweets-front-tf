<template>
    <div class="boton__like">
        <button><i class="far fa-heart"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonLike',
    data() {
        return {
            // like = true
        }
    },
    // methods: {
    //     likePost(){
    //         fetch('https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}/like')
    //         .then(res => {
    //             return res.json()
    //         })
    //         .then(data => {
    //             this.like = data;
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // },
    // created() {
    //     fetch('https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}/like')
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