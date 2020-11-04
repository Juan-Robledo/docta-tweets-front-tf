<template>
    <div class="formulario__login">
        <form action="">
            <input type="text" placeholder="Usuario" v-model="usuario">
            <input type="text" placeholder="Password" v-model="password">
            <button>Login</button>
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

            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>

</style>