<template>
    <div class="boton__eliminar__post">
        <button @click="removePost"><i class="fas fa-trash-alt"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonEliminarPost',
    props: {
        idPostUser: String
    },
    data() {
        return {
            // deletePost = true,
        }
    },
    methods: {
        removePost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPostUser}`, {
                method: 'DELETE',
                body: {
                    "autor": "USERNAME"
                    }
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                console.log(data)
                // this.deletePost = data;
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style scoped>
    button{
        border: none;
        background-color: #999999ad;
        font-size: 17px;
        color: #333333;
    }
</style>