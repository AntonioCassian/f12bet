<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="register">
        <Header />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
    components: {
        Header,
        Footer
    }
}
</script>

<style scoped>
    *{
        background: #000
    }
</style>