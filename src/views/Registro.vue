<template>
    <div class="registro">
        <formulario-usuario :userURL='userURL'/>
    </div>
</template>

<script>
import FormularioUsuario from '../components/FormularioUsuario'
export default {
    name: 'Registro',
    props: {
        masterURL: String
    },
    components: {
        FormularioUsuario
    },
    data() {
        return {
            userURL: `${this.masterURL}/users`
        }
    },
}
</script>

<style>
    .registro{
        display: flex;
        margin: 0 auto;
    }
</style>