<template>
    <div class="formulario">
        <h2>Registrarse</h2>
        <form action="" class="formulario__usuario">
            <input type="text" placeholder="Nombre" v-model="nombre">
            <input type="text" placeholder="Username" v-model="username">
            <input type="text" placeholder="Password" v-model="password">
            <button @click.prevent="addUser">Registrarse</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioUsuario',
    data() {
        return {
            nombre: '',
            username: '',
            password: ''
        }
    },
    methods: {
        addUser(){
            fetch('https://node-api-doctadevs.vercel.app/users',
            {
                method: 'POST',
                header: {'Content-Type':'application/json'},
                body: JSON.stringify(this.nombre, this.username, this.password)
                // {
                //     "name": "this.nombre",
                //     "username": "this.username",
                //     "password": "this.password"
                // }
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                // this.usuario = data;
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style scope>
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
    .formulario__usuario{
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
    .formulario__usuario input{
        width: 80%;
        height: 35px;
        margin: 10px 0;
        border: 1px solid #cccccc;
        border-radius: 5px;
        font-size: 1rem;
    }
    .formulario__usuario button{
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