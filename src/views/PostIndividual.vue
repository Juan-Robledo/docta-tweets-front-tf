<template>
    <div class="post__individual">
        <post v-for="(post, index) in posts" :key="index"
        :autor='post.autor.username'
        :fecha='post.fecha'
        :mensaje='post.mensaje'
        :likes='post.likes.length'
        :idPost='post._id'>
        </post>
    </div>
</template>

<script>
import Post from '../components/Post'

export default {
    name: 'PostInvividual',
    components:{
        Post
    },
    props: {
        idPost: String
    },
    data() {
        return {
            posts: [],
            postsURL: 'https://node-api-doctadevs.vercel.app/posts/'
        }
    },
    created() {
        fetch(`${this.postsURL}${this.$route.params.postID}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.posts = data.body;
            })
        .catch(err => console.log(err))
    },
}
</script>

<style>

</style>