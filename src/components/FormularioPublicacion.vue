<template>
    <div class="formulario__publicacion">
        <form class="formulario">
            <h5>Tweets</h5>
            <textarea v-model="publish" placeholder="What's going on?"></textarea>
            <button>Publicar</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioPublicacion',
    data() {
        return {
            publish: '',
        }
    },
    created() {
        fetch('https://node-api-doctadevs.vercel.app/posts',
            {
            methods: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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
            this.publish = data;
        })
        .catch(err => {
            console.log(err)
        })
    },
}
</script>

<style>

</style>