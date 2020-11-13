<template>
    <div class="container">
        <header-app />
        <router-view :masterURL='masterURL'/>
        <footer-app />
    </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'

export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp,
    },
    data() {
        return {
            masterURL: 'https://node-api-doctadevs.vercel.app'
        }
    },
}
</script>

<style>
    html{
        /* background-color: #444444; */
        background-color: #35495e;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>