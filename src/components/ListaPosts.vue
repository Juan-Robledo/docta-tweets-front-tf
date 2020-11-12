<template>
    <div class="lista__posts">
        <post v-for="(post, index) in posts" :key="index"
        :autor='post.autor.username'
        :fecha='post.fecha'
        :mensaje='post.mensaje'
        :likes='post.likes.length'
        :idPost='post._id'
        :userPost='userPost'>
        </post>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name: 'ListaPosts',
    props: {
        URL: String
    },
    components: {
        Post,
    },
    data() {
        return {
            posts: [],
            postsURL: 'https://node-api-doctadevs.vercel.app/posts',
        }
    },
    created() {
        fetch(this.postsURL)
        .then(response => response.json())
        .then(data => {
            this.posts = data.body;
        })
        .catch(err => console.log(err))
    },
    watch: {
        posts: function(){
            fetch(this.postsURL)
            .then(response => response.json())
            .then(data => {
                this.posts = data.body;
            })
            .catch(err => console.log(err))
        }
    },
    methods: {
        userPost(){
            fetch(this.URL,{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type':'application/json',
                    'Authorization' : `Bearer ${sessionStorage.getItem('token')}`
                    },
                })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                // this.posts = data.body;
            })
            .catch(err => console.log(err))
        }
    },
}
</script>

<style>

</style>