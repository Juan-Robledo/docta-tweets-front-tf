<template>
    <div class="header__app">
        <h1>Vue Tweets</h1>
        <div class="mode">
            <button class="switch">
                <span><i class="fas fa-sun"></i></span>
                <span><i class="fas fa-moon"></i></span>
            </button>
            <boton-cerrar-Seccion></boton-cerrar-Seccion>
        </div>
        <menu-app></menu-app>
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
        height: 110px;
        margin-bottom: 20px;
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