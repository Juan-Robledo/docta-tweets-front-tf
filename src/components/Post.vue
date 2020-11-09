<template>
    <div class="post" @click="selectedPost">
        <div class="post__title">
            <h3>{{autor}}</h3>
            <span>{{fecha}}</span>
        </div>
        <div class="post__message">
            <p>{{mensaje}}</p>
        </div>
        <div class="post__button">
            <boton-like :idPostUser="idPost" @postLikes="likePost"><span> {{ `${likes} likes`}}</span></boton-like>
            <boton-eliminar-post :idPostUser='idPost' @postDelete="removePost"></boton-eliminar-post>
            <boton-editar-posts :idPostUser='idPost' @postEdit="editPost"></boton-editar-posts>
        </div>
    </div>
</template>

<script>
import BotonEliminarPost from './BotonEliminarPost'
import BotonLike from './BotonLike'
import BotonEditarPosts from './BotonEditarPosts'

export default {
    name: 'Post',
    components: {
        BotonEliminarPost,
        BotonLike,
        BotonEditarPosts
    },
    props: {
        autor: String,
        fecha: String,
        mensaje: String,
        likes: Number,
        idPost: String
    },
    data() {
        return {
            post: {}
        }
    },
    methods: {
        removePost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'DELETE',
                body: {
                    autor: this.autor
                    }
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
        },
        likePost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}/like`,
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'POST'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err));
        },
        editPost(){
            fetch(`https://node-api-doctadevs.vercel.app/posts/${this.idPost}`,
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'PATCH',
                body: {
                    propiedad: this.mensaje,
                    valor: "NUEVO_MENSAJE",
                    autor: this.autor
                    }
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.log(err))
        },
        selectedPost(){
            console.log('./PostIndividual')
        }
    }
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
        background-color: #999999ad;
        color: #fcfa79;
        text-transform: lowercase;
        cursor: pointer;
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