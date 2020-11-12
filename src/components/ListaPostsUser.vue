<template>
    <div class="lista__post__user">
            <post v-for="(post, index) in postUser" :key="index"
            :autor='post.autor.username'
            :fecha='post.fecha'
            :mensaje='post.mensaje'
            :likes='post.likes.length'
            >
            </post>
            <p>{{today}}</p>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name:'ListaPostsUser',
    components: {
        Post
    },
    props: {
        autor: String
    },
    data() {
        return {
            postUser: [],
            today: new Date(),
            usersURL: 'https://node-api-doctadevs.vercel.app/users/'
        }
    },
    created() {
        fetch(`${this.usersURL}/posts`,{
            headers: {
            'Accept': 'application/json',
            'Content-Type':'application/json',
            'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.postUser = data.body;
        })
        .catch(err => console.log(err))
    },
    watch: {
        postUser: function(){
            fetch(`${this.usersURL}/posts`,{
                headers: {
                'Accept': 'application/json',
                'Content-Type':'application/json',
                'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                },
            })
            .then(response => response.json())
            .then(data => {
                this.postUser = data.body;
            })
            .catch(err => console.log(err))
        }
    },
}
</script>

<style>

</style>