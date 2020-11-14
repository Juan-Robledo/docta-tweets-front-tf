<template>
    <div class="formulario">
        <h2>Ingresar</h2>
        <form @submit.prevent="login" class="formulario__login">
            <input type="text" placeholder="Usuario" v-model="username">
            <input type="password" placeholder="Password" v-model="password">
            <button>Login</button>
            <p>{{errores}}</p>
            <span>Si no estas registrado has click en <a href="./Registro">Registrarse</a></span>
        </form>
    </div>
</template>

<script>
export default {
    name: 'FormularioLogin',
    props: {
        loginURL: String
    },
    data() {
        return {
            username: '',
            password: '',
            errores: ''
        }
    },
    methods: {
        login(){
            fetch(this.loginURL,
                {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(
                        {
                        username: this.username,
                        password: this.password,
                        },
                    )
                }
            )
            .then(res => {
                return res.json()
            })
            .then(data => {
                if(data.error){
                this.errores = data.message;
                return
                }
                let token = data.body.token;
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('username', this.username)
                this.username = '';
                this.password = '';
                this.$router.push({name: 'home'});
            })
            .catch(err => {
                console.log(err)
            })
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
        align-items: center;;
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
    @media screen and (max-width: 700px) {
        .formulario{
            width: 80%;
            height: 350px;
            margin: 15px auto;
        }
        .formulario__login{
            margin: 0 auto;
        }
    }
    /* v-if="!username == ' ' ? '!usernanme' : false || !password == ' ' ? '!password' : false" */
</style>
