<template>
    <div class="lista__post__user">
            <post v-for="(post, index) in postUser" :key="index"
            :fecha='post.fecha'
            :mensaje='post.mensaje'
            :likes='post.likes.length'
            >
            </post>
            <!-- <div v-for="(post, index) in postUser" :key="index">
                <p>{{post.mensaje}}</p>
                <p>{{post.fecha}}</p>
                <p>{{post.likes.length}}</p>
            </div> -->
    </div>
</template>

<script>
import Post from './Post'

export default {
    name:'ListaPostsUser',
    components: {
        Post
    },
    data() {
        return {
            postUser: []
        }
    },
    created() {
        fetch(`https://node-api-doctadevs.vercel.app/users/${this.username}/posts`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.body)
            this.postUser = data.body;
        })
        .catch(err => console.log(err))
    }
}
</script>

<style>

</style>