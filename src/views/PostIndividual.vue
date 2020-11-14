<template>
    <div class="post__individual">
        <lista-posts :URL='URL'/>
    </div>
</template>

<script>
import ListaPosts from '../components/ListaPosts.vue'

export default {
    name: 'PostInvividual',
    components:{
        ListaPosts
    },
    props: {
        masterURL: String
    },
    data() {
        return {
            URL: `${this.masterURL}/posts/${this.$route.params.postID}`
        }
    },
}
</script>

<style>
    .post__individual{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 20px auto;
    }
</style>