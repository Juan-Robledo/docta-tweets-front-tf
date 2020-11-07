<template>
    <div class="perfil">
        <formulario-usuario></formulario-usuario>
        <boton-eliminar-cuenta @userDelete="deleteUser"></boton-eliminar-cuenta>
    </div>
</template>

<script>
import FormularioUsuario from '../components/FormularioUsuario'
import BotonEliminarCuenta from '../components/BotonEliminarCuenta'

export default {
    name: 'Perfil',
    components: {
        FormularioUsuario,
        BotonEliminarCuenta
    },
    methods: {
        deleteUser(){
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

</style>