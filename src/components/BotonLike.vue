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
        border-radius: 10%;
        background-color: #999999ad;
        font-size: 17px;
        color: #333333;
        cursor: pointer;
    }
    button:hover{
        background-color: #d1a1a1;
        color: #e22727;
    }
</style>