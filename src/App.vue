<template>
    <div class="container">
        <header-app></header-app>
        <home></home>
        <footer-app></footer-app>
    </div>
</template>

<script>
import HeaderApp from './components/HeaderApp'
import FooterApp from './components/FooterApp'
import Home from './views/Home'

export default {
    name: 'App',
    components: {
        HeaderApp,
        FooterApp,
        Home
    }
}
</script>

<style>

</style>