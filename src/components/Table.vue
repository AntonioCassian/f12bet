<template>
    <section class="tabela">

        <div class="popular">
            <div class="sec-popular">
                <p class="title-pop">Mais popular</p>
            </div>
        </div>
        <div class="sec">
            <div class="btns">
                <button @click="basquete()">Futebol</button>
                <button @click="basquete()">Basquete</button>
                <button>Tênis</button>
            </div>
        </div>
        <div>
            <table>
                <!--Basquete-->

                <tbody v-show="selecionado">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="3">
                            <span>
                                Vencedor (inc. Tempo extra)
                            </span>
                        </td>
                        <td class=""></td>
                    </tr>
                    <tr class="titulo-tr-sec">
                        <td colspan="2"></td>
                        <td class="bd-td">
                            <span>1</span>
                        </td>
                        <td class="widt"></td>
                        
                        <td class="bd-td">
                            <span>2</span>
                        </td>
                        <td></td>
                    </tr>

                    <!--conteudo da tabela -->

                    <tr class="times-compet" v-for="jogo in basquete_jogos" :key="jogo.id">
            
                    <td class="data-time">
                        <span class="data">{{ jogo.data }}</span><span class="sep">|</span><span class="time">{{ jogo.hora }}</span>
                    </td>

                    <td class="nomes">
                        <div >
                        <a href="">
                            <span class="competidor">{{ jogo.time1 }}</span> 
                        <span> - </span> 
                        <span class="competidor">{{ jogo.time2 }}</span></a>
                        </div>
                    </td>

                    <td class="number">
                        <a href=""><span>{{ jogo.um }}</span></a>
                    </td>

                    <td style="width: 3px"></td>

                    <td class="number">
                        <a href=""><span>{{ jogo.dois }}</span></a>
                    </td>

                    
                    <td class="apostadores">
                        <span class="pes">{{ jogo.pessoas }}</span>
                        </td>
                    </tr>


                </tbody>

                <!--Futebol-->
                <tbody v-show="!selecionado">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="5">
                            <span class="titulo-tab">1X2</span>
                        </td>
                        <td></td>
                    </tr>
                    <tr class="titulo-tr-sec">
                        <td colspan="2"></td>
                        <td class="bd-td">
                            <span>1</span>
                        </td>
                        <td class="widt"></td>
                        <td class="bd-td">
                            <span>X</span>
                        </td>
                        <td class="widt"></td>
                        <td class="bd-td">
                            <span>2</span>
                        </td>
                        <td></td>
                    </tr>

                    <!--conteudo da tabela -->

                    <tr class="times-compet" v-for="jogo in futebol_jogos" :key="jogo.id">
            
                    <td class="data-time">
                        <span class="data">{{ jogo.data }}</span><span class="sep">|</span><span class="time">{{ jogo.hora }}</span>
                    </td>

                    <td class="nomes">
                        <div >
                        <a href="">
                            <span class="competidor">{{ jogo.time1 }}</span> 
                        <span> - </span> 
                        <span class="competidor">{{ jogo.time2 }}</span></a>
                        </div>
                    </td>

                    <td class="number">
                        <a href=""><span>{{ jogo.um }}</span></a>
                    </td>

                    <td style="width: 3px"></td>

                    <td class="number">
                        <a href=""><span>{{ jogo.empat }}</span></a>
                    </td>

                    <td style="width: 3px"></td>

                    <td class="number">
                        <a href=""><span>{{ jogo.dois }}</span></a>
                    </td>

                    
                    <td class="apostadores">
                        <span class="pes">{{ jogo.pessoas }}</span>
                        </td>
                    </tr>


                </tbody>

                <!--Tênis -->

                <tbody v-if="selecionado">
                    <tr class="titulo-tr">
                        <td colspan="2"></td>
                        <td colspan="3">
                            <span class="titulo-tab">
                                2 vias
                            </span>
                        </td>
                        <td class=""></td>
                    </tr>
                    <tr class="titulo-tr-sec">
                        <td colspan="2"></td>
                        <td class="bd-td">
                            <span>1</span>
                        </td>
                        <td class="widt"></td>
                        
                        <td class="bd-td">
                            <span>2</span>
                        </td>
                        <td></td>
                    </tr>

                    <!--conteudo da tabela -->

                    <tr class="times-compet" v-for="jogo in tenis_jogos" :key="jogo.id">
            
                    <td class="data-time">
                        <span class="data">{{ jogo.data }}</span><span class="sep">|</span><span class="time">{{ jogo.hora }}</span>
                    </td>

                    <td class="nomes">
                        <div >
                        <a href="">
                            <span class="competidor">{{ jogo.time1 }}</span> 
                        <span> - </span> 
                        <span class="competidor">{{ jogo.time2 }}</span></a>
                        </div>
                    </td>

                    <td class="number">
                        <a href=""><span>{{ jogo.um }}</span></a>
                    </td>

                    <td style="width: 3px"></td>

                    <td class="number">
                        <a href=""><span>{{ jogo.dois }}</span></a>
                    </td>

                    
                    <td class="apostadores">
                        <span class="pes">{{ jogo.pessoas }}</span>
                        </td>
                    </tr>


                </tbody>
                
            </table>
        </div>
    </section>
</template>

<script>
export default {
    name:'TabelaMain',
    data(){
        return {
            selecionado: false
        }
    },
    methods: {
        basquete(){
            this.selecionado = !this.selecionado
        },
    },
    props: ['futebol_jogos', 'basquete_jogos', 'tenis_jogos']
}
</script>

<style scoped>
.btns{
    display: flex;
    margin: 5px 0;
}
.btns> button{
    border: none;
    cursor: pointer;
    background: rgb(1, 1, 15);
    color:#fff;
    padding: 4px 70px;
    font-size: 12px;
    text-transform: uppercase;
    border-right: 1px solid;
}
.btns> button:hover{
    background: linear-gradient(90deg, #8BC054 0%, #cbf160 100%);
    color: #232520;  
}
.sec{
    width: 100%;
    background: #31343b;
}
.popular{
    background: linear-gradient(90deg, #355a15 0%, #83bf4e 100%);
    width: 100%;
    text-align: start;
}
.sec-popular{
    padding: 6px;
}
.title-pop{
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 26px;
}
.tabela{
    text-align: center;
    width: 100%;
}
.number> a > span{
    background: #232520;
    border-radius: 5px;
    position: relative;
    top: 6px;
    color: #fff;
    padding: 5px;
}
.number> a > span:hover{
    background: #C9F73C;
    color: #232520;
}
.number >a {
    margin-left: 0;
}
.apostadores{
    width: 40px;
    text-align: center;
}
.pes{
    color: #C9F73C;
    font-size: 12px;
    position: relative;
    top: 6px;
    right: 8px;
}
.times-compet{
    border-top: 2px solid #81817f;
    padding: 3px 1px;
    background: #3d3d3c;
}
.times-compet:hover{
    background: #2e2e2d;
}
.nomes {
    font-size: 12px;
    color: #fff !important;
    position: relative;
    float: left;
    top: 10px;
    font-weight: 500;
}
.competidor{
    color: #fff;
}
.data-time{
    color: #C9F73C;
    font-size: 11px;
    width: 50px;
    padding: 4px;
}
.data{
    display: block;
}
.time{
    display: block;
}
.sep{
    display: none;
    color: transparent;
    padding: 0 2px;
}
table{
    border-spacing: 0;
    text-align: center;
    width: 100%;
}
.titulo-tr{
    background: #36373c;
    color: #fff;
}
.widt{
    width: 1px;
}
.bd-td{
    font-size: 11px;
    padding: 2px 3px;
    width: 40px;
}
.titulo-tab{
    font-size: 13px;
    text-transform: uppercase;
}
.titulo-tr-sec{
    background: #31343b;
    color: #fff;
}
</style>