<template>
    <div class="lista__posts" >
        <post v-for="(post, index) in posts" :key="index"
        :autor='post.autor.username'
        :fecha='post.fecha'
        :mensaje='post.mensaje'
        :likes='post.likes.length'
        :idPost='post._id'
        @giftLike='getPosts'
        @pullPost='getPosts'/>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name: 'ListaPosts',
    props: {
        URL: String,
    },
    components: {
        Post,
    },
    data() {
        return {
            posts: []
        }
    },
    methods: {
        getPosts(){
            fetch(this.URL)
            .then(response => response.json())
            .then(data => {
                this.posts = data.body;
            })
            .catch(err => console.log(err))
        },
    },
        created() {
        this.getPosts()
    },
}
</script>

<style>
    .lista__posts{
        width: 1120px;
        height: auto;
        display: flex;
        flex-flow: row wrap;
        margin: 0 auto;
    }
    @media screen and (max-width: 700px) {
        .post{
            width: 80%;
            height: 150px;
        }
    }
</style>