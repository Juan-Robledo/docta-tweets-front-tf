<template>
    <div class="lista__posts">
        <post v-for="(post, index) in posts" :key="index"
        :autor='post.autor.username'
        :fecha='post.fecha'
        :mensaje='post.mensaje'
        :likes='post.likes.length'>
            <!-- <ul v-for="(post, index) in posts" :key="index">
                <li>{{post.autor.username}}</li>
                <li>{{post.mensaje}}</li>
                <li>{{post.likes.length}}</li>
                <li>{{post.fecha}}</li>
            </ul> -->
        </post>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name: 'ListaPosts',
    components: {
        Post,
    },
    data() {
        return {
            posts: []
        }
    },
    created() {
        fetch('https://node-api-doctadevs.vercel.app/posts')
        .then(response => response.json())
        .then(data => {
            console.log(data.body)
            this.posts = data.body;
        })
        .catch(err => console.log(err))
    },
}
</script>

<style>

</style>