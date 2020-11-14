<template>
    <div class="header__app">
        <div class="title">
            <h1>Vue Tweets</h1>
            <boton-cerrar-Seccion />
        </div>
        <div class="mode">
            <!-- <button class="switch">
                <span><i class="fas fa-sun"></i></span>
                <span><i class="fas fa-moon"></i></span>
            </button> -->
        </div>
        <div class="menu">
            <menu-app />
        </div>
    </div>
</template>

<script>
import MenuApp from './MenuApp'
import BotonCerrarSeccion from './BotonCerrarSesion'

export default {
    name: 'HeaderApp',
    components: {
        MenuApp,
        BotonCerrarSeccion
    }
}
</script>

<style>
    .header__app{
        /* color: #fcfa79; */
        color: #42b883;
        width: 1120px;
        height: 110px;
        margin: 0 auto;
        margin-bottom: 20px;
        display: flex;
        flex-flow: row wrap;
    }
    .header__app .title{
        flex-basis: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30px;
    }
    .header__app .menu{
        margin: 0 auto;
    }
    @media screen and (max-width: 770px) {
        .header__app .title{
            height: 100px;
            flex-flow: column wrap;
            padding: 0 30px;
        }
    }
    @media screen and (max-width: 430px) {
        .header__app .title{
            height: 200px;
            flex-flow: column wrap;
            padding: 0 30px;
        }
    }
    /* .switch{
        background-color: #343d5b;
        border: none;
        border-radius: 1100px;
        position: relative;
        cursor: pointer;
        display: flex;
        outline: none;
    }
    .switch::after{
        content: '';
        display: block;
        width: 30px;
        height: 30px;
        position: absolute;
        background-color: #f1f1f1;
        top: 0;
        left: 0;
        right: unset;
        border-radius: 100px;
        transition: .3s ease all;
        box-shadow: 0px 0px 2px 2px rgba(0,0,0,.2);
    }
    span{
        width: 30px;
        height: 30px;
        line-height: 30px;
        display: block;
        background: none;
        color: #ffffff;
    } */
</style>