<template>
    <div class="post">
        <router-link class="post link" :to="{name: 'post', params: {postID: idPost}}">
            <div class="post__title">
                <h3>{{autor}}</h3>
                <span>{{fecha}}</span>
            </div>
            <div class="post__message">
                <p>{{mensaje}}</p>
            </div>
        </router-link>
        <div class="post__button">
            <boton-like @giveLike="likePost" @click="likePost"><span> {{ `${likes} likes`}}</span></boton-like>
            <boton-eliminar-post @postDelete="removePost" v-if="username == autor" @click="removePost"/>
        </div>
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
            username: sessionStorage.getItem('username'),
            postsURL: 'https://node-api-doctadevs.vercel.app/posts/'
        }
    },
    methods: {
        removePost(){
            fetch(`${this.postsURL}${this.idPost}`,{
                headers: {
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'DELETE',
                body: JSON.stringify({
                    autor: sessionStorage.getItem('username')
                })
            })
            .then(res => {
                return res.json()
                })
            .then(data => {
                this.$emit('pullPost')
                console.log(data)
            })
            .catch(err => console.log(err))
        },
        likePost(){
            fetch(`${this.postsURL}${this.idPost}/like`,
            {
                headers: {
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
                method: 'POST'
            })
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.$emit('giftLike')
                console.log(data)
            })
            .catch(err => console.log(err));
        },
    },
}
</script>

<style>
    .post{
        width: 600px;
        margin: 10px auto;
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
    @media screen and (max-width: 700px) {
        .post{
            margin: 10px;
        }
    }
</style>