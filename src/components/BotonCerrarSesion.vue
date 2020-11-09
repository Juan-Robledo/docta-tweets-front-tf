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
+           sessionStorage.removeItem('token')
        }
    },
}
</script>

<style>

</style>