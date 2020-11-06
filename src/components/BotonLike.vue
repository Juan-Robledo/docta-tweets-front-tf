<template>
    <div class="boton__like">
        <button @click="likePost"><i class="far fa-heart"></i><slot></slot></button>
    </div>
</template>

<script>
export default {
    name: 'BotonLike',
    props: {
        idPostUser: String
    },
    data() {
        return {
            like: 0,
        }
    },
    methods: {
        likePost(){
            // let result = this.like;
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPostUser}/like`,
            {
                method: 'POST'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                // this.like += data;
            })
            .catch(err => {
                console.log(err , 'error')
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
        background-color: #999999ad;
        font-size: 17px;
        color: #333333;
    }
    button:hover{
        color: #e22727;
    }
</style>