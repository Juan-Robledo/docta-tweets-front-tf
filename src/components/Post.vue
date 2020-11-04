<template>
    <div class="postUser">
        <ul v-for="(post, id) in postUser" :key="id">
            <li>{{`${post.autor} ${post.mensaje} ${post.fecha}`}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Post',
    data() {
        return {
            postUser: []
        }
    },
    methods: {
        postUser(){
            fetch('https://node-api-doctadevs.vercel.app/users/{{USERNAME}}/posts')
            .then(res => {
                return res.json()
            })
            .then(data => {
                this.postUser = data;
            })
            .catch(err => {
                console.log(err)
            })
        }
    },
}
</script>

<style>

</style>