<template>
    <div class="menu">
        <!-- <div class="menu__publico"> -->
            <router-link class="links" :to="{path: '/login'}">Login</router-link>
            <router-link class="links" :to="{path: '/registro'}">Registro</router-link>
        <!-- </div> -->
        <!-- <div class="menu__privado"> -->
            <router-link class="links" :to="{path: '/'}">Home</router-link>
            <router-link class="links" :to="{path: '/feed', name: 'feed', params: {username: autor}}">Feed</router-link>
            <router-link class="links" :to="{path: '/perfil'}">Perfil</router-link>
        <!-- </div> -->
    </div>
</template>

<script>
export default {
    name: 'MenuApp',
    props: {
        autor: String
    }
}
</script>

<style scoped>
    .menu{
        text-align: center;
    }
    .links{
        /* color: #ffffff; */
        color: #35495e;
        padding: 0 30px;
        text-decoration: none;
        font-size: 1.2rem;
    }
    .links:hover{
        background-color: #5c738b;
    }
</style>