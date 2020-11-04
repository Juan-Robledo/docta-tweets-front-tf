<template>
    <div class="formulario__usuario">
        <form action="">
            <input type="text" placeholder="Nombre" v-model="name">
            <input type="text" placeholder="Username" v-model="username">
            <input type="text" placeholder="Password" v-model="password">
            <button>Register</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioUsuario',
    data() {
        return {
            name: '',
            username: '',
            password: ''
        }
    },
    methods: {
        addUser(){
            fetch('https://node-api-doctadevs.vercel.app/users', {
                body: {
                    "name": "NOMBRE",
                    "username": "USERNAME",
                    "password": "PASSWORD"
                }
            })
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