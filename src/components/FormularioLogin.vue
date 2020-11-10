<template>
    <div class="formulario">
        <h2>Ingresar</h2>
        <form
        @submit.prevent="login"
        class="formulario__login"
        >
            <input type="text" placeholder="Usuario" v-model="username">
            <input type="text" placeholder="Password" v-model="password">
            <button>Login</button>
            <p>{{error}}</p>
            <span>Si no estas registrado has click en <a href="./Registro">Registrarse</a></span>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioLogin',
    data() {
        return {
            username: '',
            password: '',
            error: ''
        }
    },
    methods: {
        login(){
            fetch('https://node-api-doctadevs.vercel.app/login',
                {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                        {
                        username: this.username,
                        password: this.password,
                        },
                        sessionStorage.setItem('username', this.username),
                    )
                }
            )
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
                let token = data.body.token;
                sessionStorage.setItem('token', token);
                this.error = data.message;
            })
            .catch(err => {
                console.log(err)
            })
            this.username = '';
            this.password = '';
        },
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
    .formulario__login button:hover{
        background-color: #f7f315;
    }
    /* v-if="!username == ' ' ? '!usernanme' : false || !password == ' ' ? '!password' : false" */
</style>
