<template>
    <div class="login">
        <formulario-login :loginURL='loginURL'/>
    </div>
</template>

<script>
import FormularioLogin from '../components/FormularioLogin'
export default {
    name: 'Login',
    props: {
        masterURL: String
    },
    components: {
        FormularioLogin
    },
    data() {
        return {
            loginURL: `${this.masterURL}/login`
        }
    },
}
</script>

<style>
    .login{
        display: flex;
        margin: 0 auto;
    }
</style>