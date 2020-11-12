<template>
    <div class="post">
        <router-link class="post link" :to="{name: 'post', params: {postID: idPost}}">
            <div class="post__title">
                <p>{{autor}} | <span>{{fecha}}</span></p>
            </div>
            <div class="post__message">
                <p>{{mensaje}}</p>
            </div>
        </router-link>
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
        idPost: String,
    },
    data() {
        return {
            post: {},
            postsURL: 'https://node-api-doctadevs.vercel.app/posts/'
        }
    },
    methods: {
        removePost(){
            fetch(`${this.postsURL}${this.idPost}`, {
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
            fetch(`${this.postsURL}${this.idPost}/like`,
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
            fetch(`${this.postsURL}${this.idPost}`,
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
    }
}
</script>

<style>
    .post{
        width: 600px;
        margin: 10px auto;
        min-height: 10vh;
        border: 1px solid #cccccc;
        border-radius: 15px;
        background-color: #999999ad;
        cursor: pointer;
    }
    .link{
        color: #fcfa79;
        text-transform: lowercase;
        text-decoration: none;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        background-color: #99999900;
        border: none;
    }
    .post__title{
        margin: 10px;
        flex-basis: 100%;
        display: flex;
        align-items: baseline;
    }
    /* .post__title h3, .post__title span{
        width: 49%;
    } */
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