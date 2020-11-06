<template>
    <div class="formulario">
        <h2>Ingresar</h2>
        <form action="" class="formulario__login">
            <input type="text" placeholder="Usuario" v-model="usuario">
            <input type="text" placeholder="Password" v-model="password">
            <button @click.prevent="login">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioLogin',
    data() {
        return {
            usuario: '',
            password: ''
        }
    },
    methods: {
        login(){
            fetch('https://node-api-doctadevs.vercel.app/users/{{USERNAME}}')
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>
    .formulario{
        width: 500px;
        margin: 10px auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        min-height: 60vh;
        border: 1px solid #cccccc;
        border-radius: 15px;
        background-color: #999999ad;
    }
    .formulario h2{
        color: #cccccc;
    }
    .formulario__login{
        flex-basis: 90%;
        margin: 10px auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: 50vh;
        border: 1px solid #cccccc;
        border-radius: 15px;
        background-color: #999999ad;
    }
    .formulario__login input{
        width: 80%;
        height: 35px;
        margin: 10px 0;
        border: 1px solid #cccccc;
        border-radius: 5px;
        font-size: 1rem;
    }
    .formulario__login button{
        width: 81%;
        height: 35px;
        margin: 5px 0;
        border: 1px solid #fcfa79;
        border-radius: 5px;
        font-size: 1.2rem;
        font-weight: 600;
        background-color: #fcfa79;
        color: #333333;
    }
</style>