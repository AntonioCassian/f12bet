<template>
    <div class="popup" v-show="closed">
            <form class="form-control">
                <div class="closePop"><span class="fechar" @click="closed = !closed">x</span></div>
                <div class="logo">
                    <img src="@/./assets/logo.png" alt="">
                </div>
                <div class="text">Entrar</div>
                <div class="inputs">
                    <input type="text" placeholder="Usuário (Login)"/>
                </div>
                <div class="inputs">
                    <input type="password" placeholder="Senha"/>
                </div>

                <div class="btn">
                    <button>Entrar</button> 
                    <span>Esqueci minha senha</span>
                </div>
            </form>
    </div>
</template>

<script>
export default {
    name: 'Login_',
    data(){
        return{
            closed: true
        }
    }
}
</script>

<style scoped>
.popup{
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 3;
    background: rgba(0,0,0, 0.2);
    
    display: flex;
    align-items: center;
    justify-content: center;
}
.form-control{
    text-align: center;
    background: #232429;
    padding: 40px;
    position: relative;
    border: 10px solid rgba(255, 255, 255, 0.15);
}
.closePop{
    position: absolute;
    right: 10px;
    top: 6px;
}
.fechar{
    color: #c9f73c;
    font-size: 14px;
    font-weight: 900;
    cursor: pointer;
}
.text{
    margin-bottom: 25px;
    color: #fff;
    font-weight: bold;
}
.logo{
    margin: 0 80px;
    height: 40px;
}
.logo>img{
    width: 120px;
}
.inputs{
    margin-bottom: 20px;
    width: 93%;
}
.inputs input{
    display: inline-block;
    width: 100%;
    height: 40px;
    font-size: 12px;
    padding-left: 15px;
}

button{
  width: 40%;
  background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
  color: #232520;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  border: none;
  border-radius: 3px;
  float: left;
}
.btn > span{
    font-size: 11px;
    color: #fff;
    float: right;
}
</style>