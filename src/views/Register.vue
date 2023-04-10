<template>
    <div class="register">
        <Header />
        <main>
            <div class="container">
                <section>
                    <div class="numeros padd">
                        <ol>
                            <li>
                                <span class="number">1</span>
                                <span class="progress"></span>
                            </li>
                            <li>
                                <span class="number">2</span>
                                <span class="progress"></span>
                            </li>
                            <li>
                                <span class="number">3</span>
                            </li>
                        </ol>
                    </div>
                    <div class="padd" >
                        <span class="txt">Informação pessoal</span>
                    </div>
                    <form>
                        <fieldset class="field">
                            <div  class="divisorHead">
                                <InputLabel class="txt  padd" label="CPF">
                                <input type="number"/>
                            </InputLabel>
                            </div>
                            
                           <button class="btn">Continuar</button>
                        </fieldset>

                        <fieldset class="field" v-show="aberto" >
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Nome Completo">
                                <input type="number"/>
                            </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Data De Nascimento">
                                <input type="date"/>
                            </InputLabel>
                            </div>
                           <div class="divisor divisorHead">
                            <button class="btn">Voltar</button>
                           <button class="btn">Continuar</button>
                           </div>
                        </fieldset>

                        <fieldset class="field" v-show="aberto">
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Usuário (Login)">
                                    <input type="text"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="E-Mail">
                                    <input type="text"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead" style="display: none;">
                                <InputLabel class="txt  padd" label="Senha">
                                    <input type="password"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Telefone">
                                    <input type="Number"/>
                                </InputLabel>
                            </div>
                            <div class="divisorHead">
                                <InputLabel class="txt  padd" label="Promo Code">
                                    <input type="text"/>
                                </InputLabel>
                            </div>
                            <div class="checkdiv">
                                <input class="check" type="checkbox"/>
                                <span class="spancheck">Sou maior de 18 anos <a href="" target="_blank">Termos e Condições</a><br /> Eu li e aceito</span>
                            </div>
                            
                           <div class="divisor divisorHead">
                            <button class="btn">Voltar</button>
                           <button class="btn">Registro</button>
                           </div>
                        </fieldset>
                    </form>
                </section>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import InputLabel from '@/components/InputLabel.vue'

export default {
    name: 'RegisterApp',
    components: {
        Header,
        Footer,
        InputLabel
    },
   data(){
    return{
        aberto: false
    }
   }
}
</script>

<style scoped>
    main{
        margin: 30px 0px;
    }
    .register{
        background: #000;
    }
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    section{
        background: #484848;
        padding: 2px;
        display: inline-flex;
        flex-direction: column;
        color: #fff;
        text-align: center;
        padding: 40px 0;
        border-radius: 0px 0px 5px 5px
    }

    ol {
        list-style: none;
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    ol li {
        display: inline-block;
        vertical-align: top;
        text-align: center;
        flex: 1 1;
        position: relative;
        margin: 0 39px 0;
        height: 80px;
        width: 80px;
        background: #fff;
        border-radius: 100%;
    }
    ol li span{
        display: block;
        text-align: center;
    }
    ol li:first-child{
        background: #c9f73c;
    }
    .number{
        line-height: 78px;
        color: #484848;
        font-size: 30px;
        font-weight: 800;
    }
    .progress{
        width: 100%;
        height: 10px;
        background-color: #fff;
        position: absolute;
        transform: translateX(50%);
        z-index: 1;
        text-align: center;
        margin-left: 49%;
        top: 36px;
    }

    .txt{
        color: rgba(255, 255, 255, 0.5);
        font-size: 25px;
    }

    .padd{
        padding-bottom: 35px;
    }
    input{
        background: #31343b;
        border: 1px solid #324154;
        font-size: 16px;
        color:#fff;
        width: 100%;
        outline: none;
        padding: 7px 0;
    }
    .field{
        padding: 0 40px;
        display: flex;
        flex-direction: column;
    }
    .divisorHead{
        display: flex;
        justify-content: space-between;
        gap: 3px;
        align-items: center;
        padding-bottom: 25px;
    }
    .divisor{
        gap: 10px;
    }
    .termos{
        color: #232520;
    }
    .btn{
        width: 100%;
        background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
        color: #232520;
        cursor: pointer;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 20px;
        padding: 10px;
        border: none;
        border-radius: 3px;
    }
    .checkdiv{
        padding-bottom: 30px
    }
    .check{
        width: 15px !important;
    }
    .spancheck{
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
    }
    .spancheck > a {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
    }
</style>