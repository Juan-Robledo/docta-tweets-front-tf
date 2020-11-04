<template>
    <div class="menu">
        <router-link>Home</router-link>
        <router-link>Feed</router-link>
    </div>
</template>

<script>
import Home from '@/views/Home'
import Feed from '@/views/Feed'
export default {
    name: 'Menu',
    components: {
        Home,
        Feed
    }
}
</script>

<style>

</style>