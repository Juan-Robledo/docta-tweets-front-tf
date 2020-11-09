<template>
    <div class="boton__eliminar__cuentas">
        <button @click="removeUserBtn"><i class="fas fa-trash-alt"></i></button>
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

<style scoped>
    button{
        border: none;
        background-color: #999999ad;
        border-radius: 50%;
        font-size: 17px;
        color: #333333;
        cursor: pointer;
    }
    button:hover{
        background-color: #c26060;
        color: #830000;
    }
</style>