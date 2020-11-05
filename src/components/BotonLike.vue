<template>
    <div class="boton__like">
        <button @click="likePost"><i class="far fa-heart"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonLike',
    data() {
        return {
            like: 0,
        }
    },
    methods: {
        likePost(){
            // let result = this.like;
            fetch('https://node-api-doctadevs.vercel.app/posts/{{POST_ID}}/like')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.like += data;
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
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

<style scoped>
    button{
        border: none;
        background-color: #ffffff;
        font-size: 17px;
        color: #333333;
    }
    button:hover{
        color: #e22727;
    }
</style>