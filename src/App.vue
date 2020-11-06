<template>
    <div class="container">
        <header-app></header-app>
        <!-- <menu-app></menu-app> -->
        <router-view></router-view>
        <footer-app></footer-app>
    </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
// import MenuApp from './components/MenuApp'
// import Feed from './views/Feed'

export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp,
        // MenuApp
    }
}
</script>

<style>
    html{
        background-color: #444444;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>