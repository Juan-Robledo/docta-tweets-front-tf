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
        /* background-color: #35495e; */
        background-color: #f1f1f1;
        font-family: Arial, Helvetica, sans-serif;
        box-sizing: border-box;
        margin: 0;
    }
    .container{
        margin: 0;
        display: flex;
        flex-flow: row wrap;;
    }
</style>