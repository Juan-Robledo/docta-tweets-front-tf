<template>
    <div class="formulario__publicacion">
        <form class="formulario__form">
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
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(
                {
                autor: "USERNAME",
                mensaje: "MENSAJE"
                }
            )
            }
        )
        .then(res => {
            return res.json()
        })
        .then(data => {
            console.log(data)
            // this.publish = data;
        })
        .catch(err => {
            console.log(err)
        })
    },
}
</script>

<style>
    .formulario__publicacion{
        width: 600px;
        margin: 10px auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        min-height: 10vh;
        border: 1px solid #cccccc;
        border-radius: 15px;
        background-color: #999999ad;
        color: #fcfa79;
    }
    .formulario__form{
        width: 90%;
    }
    .formulario__form h5{
        margin: 3px;
    }
    .formulario__form textarea{
        font-size: 1.1rem;
        width: 100%;
        background-color: #999999ad;
        border: none;
        border-bottom: 1.5px solid;
    }
    .formulario__form button{
        font-size: 1.1rem;
        background-color: #fcfa79;
        color: #333333;
        border: none;
        margin: 5px 0;
    }
</style>