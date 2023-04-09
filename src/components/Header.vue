<template>
    <header class="component-header">
        <NavBar />
        <div class="btns">
            <button class="btn1">ENTRAR</button>
            <button class="btn1 btn2" @click="register">Registro</button>
        </div>
    </header>
    <LineTop />
    
</template>

<script>
import NavBar from './templates/Navbar.vue'
import LineTop from './templates/LineTop.vue'
export default {
    name: 'CompHeader',
    components: {
        NavBar,
        LineTop
    },
    methods: {
        register(){
            this.$router.push({path:'/register'})
        }
    }
}
</script>

<style scoped>
.component-header{
    background-color: #232520;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.btn1, .btn2{
    background: #78787a;
    font-size: 13px;
    padding:  5px 10px;
    border-radius: 7px;
    cursor: pointer;
    color: #fff;
    height: 40px;
}
.btn2{
    background: linear-gradient(100deg, #6ad30f 0%, #83bf4e 100%);
    padding: 0 20px;
    font-size: 15px;
    font-weight: bold;
    text-transform: capitalize;
    color: #232520;
}

</style>