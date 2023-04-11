<template>
  <div class="aovivo">
    <ComHeader />
    <Login />
  </div>
</template>

<script>
import ComHeader from '@/components/Header.vue'
import Login from '@/components/Login.vue'
export default {
    name: 'AovivoView',
    components: {
        ComHeader, Login
    }
}
</script>

<style>

</style>