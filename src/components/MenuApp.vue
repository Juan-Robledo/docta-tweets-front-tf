<template>
    <div class="menu">
            <router-link class="links" :to="{path: '/login'}">Login</router-link>
            <router-link class="links" :to="{path: '/registro'}">Registro</router-link>
            <router-link class="links" :to="{path: '/'}">Home</router-link>
            <router-link class="links" :to="{path: '/feed', name: 'feed', params: {username: username}}">Feed</router-link>
            <router-link class="links" :to="{path: '/perfil'}">Perfil</router-link>
    </div>
</template>

<script>
export default {
    name: 'MenuApp',
    data() {
        return {
            username: window.sessionStorage.getItem('username')
        }
    },
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
    @media screen and (max-width: 700px) {
        .menu{
            display: flex;
            flex-flow: column;
        }
    }
</style>