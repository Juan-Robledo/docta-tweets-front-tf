<template>
    <div class="boton__editar__post">
        <button @click="editPostBtn"><i class="fas fa-edit"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonEditarPosts',
    // props: {
    //     idPostUser: String
    // },
    methods: {
        editPostBtn(){
            this.$emit('postEdit')
        }
    }
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
        color: #eb9358;
    }
</style>