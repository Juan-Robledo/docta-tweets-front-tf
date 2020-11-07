<template>
    <div class="boton__eliminar__cuentas">
        <button @click="removeUserBtn">Remove User</button>
    </div>
</template>

<script>
export default {
    name: 'BotonEliminarCuenta',
    methods: {
        removeUserBtn(){
            this.$emit('userDelete')
        }
    },
}
</script>

<style>

</style>