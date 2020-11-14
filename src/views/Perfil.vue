<template>
    <div class="perfil">
        <h2>Perfil</h2>
        <div class="perfil__texto">
            <h1><i class="far fa-user-circle"></i></h1>
            <h3>{{`Nombre: ${nombre}`}}</h3>
            <p>{{`Usuario: ${usuario}`}}</p>
            <p>{{`Rol: ${rol}`}}</p>
        </div>
        <boton-eliminar-cuenta class="btn-delete" @userDelete="deleteUser"/>
    </div>
</template>

<script>
import BotonEliminarCuenta from '../components/BotonEliminarCuenta'

export default {
    name: 'Perfil',
    components: {
        BotonEliminarCuenta,
    },
    props: {
        masterURL: String
    },
    data() {
        return {
            nombre: '',
            usuario: '',
            rol: ''
        }
    },
    created() {
        fetch(`${this.masterURL}/users/${sessionStorage.getItem('username')}`,{
            headers: {
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                return console.log(data)
            }
            this.nombre = data.body.name
            this.usuario = data.body.username
            this.rol = data.body.role
        })
        .catch(err => console.log(err))
    },
    methods: {
        deleteUser(){
            fetch(`${this.masterURL}/users/${sessionStorage.getItem('username')}`,{
                headers: {
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'DELETE',
                body: {
                    autor: sessionStorage.getItem('username')
                    }
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                console.log(data)
                sessionStorage.removeItem('token')
                sessionStorage.removeItem('username')
                this.$router.push({name: 'login'})
            })
            .catch(err => console.log(err))
        },
    },
}
</script>

<style>
    .perfil{
        width: 500px;
        margin: 10px auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        border: 1px solid #cccccc;
        border-radius: 15px;
        background-color: #999999ad;
    }
    .perfil h2{
        color: #cccccc;
    }
    .perfil__texto h1{
        font-size: 7rem;
        margin: 0;
        color: #f7f315;
    }
    .perfil__texto{
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
    .btn-delete{
        flex-basis: 100%;
        text-align: center;
    }
    @media screen and (max-width: 700px) {
        .perfil{
            width: 80%;
            height: 410px;
            margin: 15px auto;
        }
    }
</style>