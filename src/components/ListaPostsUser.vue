<template>
    <div class="lista__post__user">
            <post v-for="(post, index) in postUser" :key="index"
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
    data() {
        return {
            postUser: [],
            today: new Date()
        }
    },
    created() {
        fetch(`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}/posts`)
        .then(res => res.json())
        .then(data => {
            // console.log(data.body[0]._id)
            this.postUser = data.body;
        })
        .catch(err => console.log(err))
    },
    watch: {
        postUser: function(){
            fetch(`https://node-api-doctadevs.vercel.app/users/${sessionStorage.getItem('username')}/posts`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.body[]._id)
                this.postUser = data.body;
            })
            .catch(err => console.log(err))
        }
    },
}
</script>

<style>

</style>