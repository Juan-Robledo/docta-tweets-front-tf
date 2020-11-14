<template>
    <div class="footer__app">
        <h3>Vue Tweets</h3>
        <a>Derechos</a>
        <a>Póliticas de Privacidad</a>
        <a>Términos y Condiciones</a>
        <a>Legales</a>
    </div>
</template>

<script>
export default {
    name: 'FooterApp'
}
</script>

<style>
    .footer__app{
        width: 1120px;
        height: 100px;
        margin: 0 auto;
        background-color: aquamarine;
        color: #35495e;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
    }
    @media screen and (max-width: 770px) {
        .footer__app{
            height: 170px;
            flex-flow: column;
        }
    }
</style>