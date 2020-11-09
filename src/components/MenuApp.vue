<template>
    <div class="menu">
        <!-- <div class="menu__publico"> -->
            <router-link class="links" to="/">Login</router-link>
            <router-link class="links" to="Registro">Registro</router-link>
        <!-- </div> -->
        <!-- <div class="menu__privado"> -->
            <router-link class="links" to="Home">Home</router-link>
            <router-link class="links" to="Feed">Feed</router-link>
            <router-link class="links" to="Perfil">Perfil</router-link>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'MenuApp',

}
</script>

<style>
    .menu{
        text-align: center;
    }
    .links{
        color: #ffffff;
        padding: 0 30px;
        text-decoration: none;
        font-size: 1.2rem;
    }
    .links:hover{
        background-color: #5c738b;
    }
</style>