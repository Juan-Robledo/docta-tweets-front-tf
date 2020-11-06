<template>
    <div class="container">
        <header-app></header-app>
        <home></home>
        <!-- <feed></feed> -->
        <footer-app></footer-app>
    </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import Home from './views/Home'
// import Feed from './views/Feed'

export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp,
        Home,
        // Feed
    }
}
</script>

<style>
    html{
        background-color: #444444;
        font-family: Arial, Helvetica, sans-serif;
    }
</style>