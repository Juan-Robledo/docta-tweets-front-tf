<template>
    <div class="boton__eliminar__cuentas">
        <button>Remove User</button>
    </div>
</template>

<script>
export default {
    name: 'BotonEliminarCuenta',
    data() {
        return {

        }
    },
    methods: {
        deleteUser(){
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