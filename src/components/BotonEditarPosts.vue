<template>
    <div class="boton__editar__post">
        <button @click="editPostBtn"><i class="fas fa-edit"></i></button>
    </div>
</template>

<script>
export default {
    name: 'BotonEditarPosts',
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
        border-radius: 50%;
        background-color: #999999ad;
        font-size: 17px;
        color: #333333;
        cursor: pointer;
    }
    button:hover{
        background-color: #ebb38e;
        color: #d16924;
    }
</style>