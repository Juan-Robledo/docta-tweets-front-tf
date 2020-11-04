<template>
    <div class="formulario__publicacion">
        <form class="formulario">
            <textarea v-model="post" placeholder="Publica tu historia"></textarea>
            <button>Publicar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioPublicacion',
    data() {
        return {
            post: '',
        }
    },
    created() {
        fetch('https://node-api-doctadevs.vercel.app/posts',
        {
            methods: 'POST',
            body: {
                "autor": "USERNAME",
                "mensaje": "MENSAJE"
                }
            }
        )
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            // this.post = data;
        })
        .catch(err => {
            console.log(err)
        })
    },
}
</script>

<style>

</style>