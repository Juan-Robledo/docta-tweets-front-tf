<template>
    <div class="lista__posts">
        <post v-for="(post, id) in posts" :key="id">
            <!-- <p>{{`${post.mensaje} ${post.fecha} ${post.likes}`}}</p> -->
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
        fetch('https://node-api-doctadevs.vercel.app/posts',{})
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
    },
}
</script>

<style>

</style>