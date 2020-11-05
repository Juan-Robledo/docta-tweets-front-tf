<template>
    <div class="post" @load="mostrarPost">
        <div class="post__title">
            <h3>Autor {{post.autor}}</h3>
            <span>November 05, 2020 08:10{{post.fecha}}</span>
        </div>
        <div class="post__message">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro nesciunt rem facere voluptatibus eum ipsa obcaecati, quis a? Deleniti facere sit cumque sequi distinctio porro autem maiores iusto animi? Totam.{{post.mensaje}}</p>
        </div>
        <div class="post__button">
            <boton-like></boton-like>
            <boton-eliminar-post></boton-eliminar-post>
        </div>
        <!-- <p>{{`${post.mensaje} ${post.fecha} ${post.likes}`}}</p> -->
    </div>
</template>

<script>
import BotonEliminarPost from './BotonEliminarPost'
import BotonLike from './BotonLike'

export default {
    name: 'Post',
    components: {
        BotonEliminarPost,
        BotonLike,
    },
    data() {
        return {
            post: []
        }
    },
    methods: {
        mostrarPost(){
            fetch('https://node-api-doctadevs.vercel.app/posts',{})
            .then(res => {
                    return res.json()
            })
            .then(data => {
                console.log(data)
                this.post = data;
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>
    .post{
        width: 600px;
        margin: 10px auto;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        min-height: 10vh;
        border: 1px solid #cccccc;
        border-radius: 15px;
    }
    .post__title{
        margin: 10px;
        flex-basis: 100%;
        display: flex;
        align-items: baseline;
    }
    .post__title h3, .post__title span{
        width: 49%;
    }
    .post__title h3{
        margin: 0;
        padding-left: 15px;
    }
    .post__message{
        flex-basis: 100%;
        margin: 5px 25px;
    }
    .post__button{
        display: flex;
    }
</style>
<!--
        <ul v-for="(post, id) in posts" :key="id">
            <li>{{`${post.autor} ${post.mensaje} ${post.fecha}`}}</li>
        </ul>

                postUser(){
            fetch('https://node-api-doctadevs.vercel.app/users/{{USERNAME}}/posts')
            .then(res => {
                return res.json()
            })
            .then(data => {
                // console.log(data)
                this.posts = data;
            })
            .catch(err => {
                console.log(err)
            })
        }

-->