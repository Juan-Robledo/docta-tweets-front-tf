<template>
    <div class="lista__posts">
        <ul v-for="(post, autor) in posts" :key="autor">
            <li>{{`${post.mensaje} ${post.fecha} ${post.likes}`}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ListaPosts',
    data() {
        return {
            posts: []
        }
    },
    created() {
        fetch('https://node-api-doctadevs.vercel.app/posts')
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