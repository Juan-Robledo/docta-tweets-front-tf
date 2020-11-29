<template>
    <div class="boton__cerrar__seccion">
        <button @click.prevent="cerrarSeccion">Cerrar Secciòn</button>
    </div>
</template>

<script>
export default {
    name: 'BotonCerrarSeccion',
    methods: {
        cerrarSeccion(){
            sessionStorage.removeItem('token')
            sessionStorage.removeItem('username')
            this.$router.push({name: 'login'})
        }
    },
}
</script>

<style>
    .boton__cerrar__seccion button{
    border: none;
    background-color:#42b883;
    color: #fff;
    font-size: 1rem;
    padding: 5px;
    border-radius: 10px;
    font-weight: 600;
    }
</style>