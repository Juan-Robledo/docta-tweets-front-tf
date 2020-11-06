<template>
    <div class="menu">
        <router-link class="links" to="Login">Login</router-link>
        <router-link class="links" to="Registro">Registro</router-link>
        <router-link class="links" to="/">Home</router-link>
        <router-link class="links" to="Feed">Feed</router-link>
        <router-link class="links" to="Perfil">Perfil</router-link>
    </div>
</template>

<script>
export default {
    name: 'MenuApp',

}
</script>

<style>
    .links{
        color: #ffffff;
        padding: 0 30px;
    }
</style>