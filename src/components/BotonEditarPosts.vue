<template>
    <div class="boton__editar__post">
        <button @click="editPost"><i class="fas fa-edit"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonEditarPosts',
    props: {
        idPostUser: String
    },
    methods: {
        editPost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPostUser}`,
            {
                method: 'PATCH',
                body: {
                    "propiedad": "mensaje",
                    "valor": "NUEVO_MENSAJE",
                    "autor": "USERNAME"
                    }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
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
    button:hover{
        color: #eb9358;
    }
</style>