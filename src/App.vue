<template>
    <div class="container">
        <header-app></header-app>
        <router-view></router-view>
        <footer-app></footer-app>
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
    }
}
</script>

<style>
    html{
        /* background-color: #444444; */
        background-color: #35495e;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>