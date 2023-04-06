<template>
    <footer class="footer">
        <div class="container-footer">
            <div class="row">
                <div class="sobre">
                <p class="line"></p>
               <p class="link-f" v-for="(sobre, index) in footer_sobre" :key="index">{{ sobre }}</p>
            </div>

            <div class=" termos sobre">
                <p class="line"></p>
               <p class="link-f" v-for="(termos, index) in footer_termos" :key="index">{{ termos }}</p>
            </div>

            <div class="jogos sobre">
                <p class="line"></p>
               <p class="link-f" v-for="(jogos, index) in footer_jogos" :key="index">{{ jogos }}</p>
            </div>
            <div class="sec-img sobre">
                <div class="primeiraImg">
                    <img src="../assets/logo.png" alt="">
                </div>
                <div class="float">
                        <SocialLink />
                </div>

                <div class="segundaImg">
                    <img src="../../public/img/icons/beGambleAware.png" alt="">
                </div>
                    <div class="amais">
                        <span>18+</span>
                    </div>
            </div>
            </div>
        
        <div class="afi row">
            <h4>Seja nosso afiliado</h4>
            <img src="@/../public/img/icons/F12-logo-partner.png" alt="">
        </div>
        <div class="pag afi row">
            <h4>Pagamentos</h4>
            <div class="pag-img">
                <img src="@/../public/img/icons/pix_logo.png" alt="">
                <img src="@/../public/img/icons/cryto-icon.png" alt="">
            </div>
        </div>
        <div class="image-text row">
              <div class="row-footer">
                <img src="@/../public/img/icons/f9099065b3c6948f3f6a6b35f1cff5d1-f12.png" alt="">
            <p class="text">
                O Serviço é fornecido pela F12 Gaming N.V, uma empresa de responsabilidade limitada registrada em Curaçao com o número de registro 159643, com endereço registrado em Zuikertuintjeweg Z/N (Zuikertuin Tower), Curaçao, autorizada pelo General Governor of Curaçao através da Antillephone . A F12 Gaming N.V está licenciada em Curaçao sob a Licença 8048/JAZ2022-022 para o fornecimento de apostas esportivas e cassino. Para processamento de pagamentos via Paysafe Group, a entidade processadora da transação será F12 Entertainment Ltd registrada no Chipre sobre o número ΗΕ431358, com endereço em rchiepiskopou Makariou III, 84, OFFICE 1, 6017, Larnaka, Chipre
            </p>
              </div>
        </div>
        <div class="ultiline">
            <p>Copyright &copy; 2023 f12.bet. Todos os direitos reservados</p>
        </div>
    </div>
    </footer>
</template>

<script>
import SocialLink from './templates/SocialLine.vue'
    export default {
        name: 'FooterApp',
        data(){
           return{
             footer_sobre: ["Quem somos", "Entre em contato", "Segurança", "Auto-Exclusão", "Afiliados"],
             footer_termos: ["Jogo responsável", "Política de Privacidade", "Termos e Condições", "AML", "Resultados e RNG", "RGPD"],
             footer_jogos: ["Esportes", "Ao Vivo", "Cassino", "Cassino ao Vivo", "Promoções"]
           }
        },
        components: {
            SocialLink
        }
    }
</script>

<style scoped>
.footer{
    background: #232429;
    margin-top: 23px;
}
    .container-footer{
        margin: 0 95px;
    }
    .row{
        display: flex;
        justify-content: space-between;
        border-bottom: 3px solid #c9f73c;
    }
    .sobre{
        padding: 45px 0;
        width: 20%;
    }
    .line{
        content: '';
        height: 3px;
        background: #c9f73c;
        width: 43px;
        margin-bottom: 15px;
    }
    .link-f{
        color: #fff;
        font-size: 13px;
        line-height: 26px;
        margin-bottom: 5px;
        cursor: pointer;
    }
    .link-f:hover{
        color:#c9f73c;
    }
    .primeiraImg > img{
        width: 250px;
    }
    .sec-img{
        float: right;
    }
    .float{
        float: right;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .amais{
        color: #fff;
        border-radius: 50%;
        border: 3px solid #c9f73c;
        width: 35px;
        height: 35px;
        font-size: 15px;
        position: relative;
        bottom: 33px;
        left: 204px;
        right: -50px;
        display: inline-block;
        text-align: center;
    }
    .amais > span{
        line-height: 33px;
    }

    .afi{
        display: block;
        text-align: center;
        color: #fff;
        padding: 20px 0;
    }
    .afi h4{
        line-height: 15px;
        padding-bottom: 2px;
        margin-bottom: 20px;
    }
    .afi> img{
        width: 300px;
    }
    .pag-img > img{
        margin: 20px;
    }
    .image-text{
        padding: 30px 0;
    }
    .row-footer{
        display: inline-flex;
        margin: 0 64px;
    }
    .row-footer > img{
        width: 80px;
        height: 80px;
    }
    .text{
        color: #fff;
        padding-top: 20px;
        font-size: 16px;
        line-height: 1.3;
    }
    .ultiline{
        padding: 40px 0;
        text-align: center;
    }
    .ultiline > p{
        font-size: 10px;
        opacity: 0.5;
        color: #eee;
        line-height: 30px;
    }
</style>