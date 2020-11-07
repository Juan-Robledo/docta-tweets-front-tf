<template>
    <div class="boton__like">
        <button @click="likePostBtn"><i class="far fa-heart"></i><slot></slot></button>
    </div>
</template>

<script>
export default {
    name: 'BotonLike',
    // props: {
    //     idPostUser: String
    // },
    methods: {
        likePostBtn(){
            this.$emit('postLikes')
        }
    },
}
</script>

<style scoped>
    button{
        border: none;
        background-color: #999999ad;
        font-size: 17px;
        color: #333333;
    }
    button:hover{
        color: #e22727;
    }
</style>