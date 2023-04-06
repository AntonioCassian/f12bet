<template>
    <div class="menu-filter">
        <div class="cab-menu">
            <div class="togg sep" @click="toggle()">
                <span>R</span>
            <div class="filt" v-show="isOpen">
                <a href="">
                    1h
                </a>
                <a href="">
                    3h
                </a>
                <a href="">
                    6h
                </a>
                <a href="">
                    9h
                </a>
                <a href="">
                    12h
                </a>
            </div>
            </div>   
        </div>
            <a href="" class="sep">
                <span>Sa</span>
            </a>
            <a href="" class="sep">
                <span>Do</span>
            </a>
            <a href="" class="sep">
                <span>2ª</span>
            </a>
            <a href="" class="sep">
                <span>3ª</span>
            </a>
            <a href="" class="sep">
                <span>4ª</span>
            </a>
            <a href="" class="sep">
                <span>5ª</span>
            </a>
            <a href="" class="sep">
                <span>6ª</span>
            </a>
    </div>

    <div class="list-menu">
        <ul class="lista" v-for="item in list_Menu" :key="item.id">
            <li class="item">
                <div class="component" @click="item.open = !item.open">
                    <div class="iconMenu">
                        <img :src="item.src" alt="">
                    <span>{{ item.text }}</span>
                    </div>
                    <span class="number">{{ item.aovivo }}</span>
                </div>
                <ul v-if="item.open == true">
                    <li class="item">
                        <div class="component">
                            <p>Brasil</p>
                            <span class="number">1</span>
                        </div>
                        <ul v-show="isOpen">
                            <li class="opcao">
                                U20 Carioca, Serie A
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="preTitulo">
            <p>Longo Prazo</p>
        </div>
        <ul class="lista" @click="toggle()" v-for="item in list_Menu" :key="item.id">
            <li class="item">
                <div class="component">
                    <div class="iconMenu">
                        <img :src='item.src' alt="">
                    <span>{{ item.text }}</span>
                    </div>
                    <span class="number">{{ item.aovivo }}</span>
                </div>
                <ul @click="toggle()" v-show="isOpen">
                    <li class="item">
                        <div class="component">
                            <p>Brasil</p>
                            <span class="number">1</span>
                        </div>
                        <ul v-show="isOpen">
                            <li class="opcao">
                                U20 Carioca, Serie A
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return{
            isOpen: false,
            list_Menu:[
                {id: 1, src:"@/../public/img/iconsMenu/1.png", text: "Futebol", aovivo: 3, open: false},
                {id: 2, src:"@/../public/img/iconsMenu/1.png", text: "Especiais Esportivos", aovivo: 3, open: false},
                {id: 3, src:"@/../public/img/iconsMenu/1.png", text: "Tênis", aovivo: 3, open: false},
                {id: 4, src:"@/../public/img/iconsMenu/1.png", text: "Basquete", aovivo: 3, open: false},
                {id: 5, src:"@/../public/img/iconsMenu/1.png", text: "Voleibol", aovivo: 3, open: false},
                {id: 6, src:"@/../public/img/iconsMenu/1.png", text: "Futsal", aovivo: 3, open: false},
                {id: 7, src:"@/../public/img/iconsMenu/1.png", text: "Beisebol", aovivo: 3, open: false},
                {id: 8, src:"@/../public/img/iconsMenu/1.png", text: "Handebol", aovivo: 3, open: false},
                {id: 9, src:"@/../public/img/iconsMenu/1.png", text: "MMA", aovivo: 3, open: false},
                {id: 10, src:"@/../public/img/iconsMenu/1.png", text: "Sinuca", aovivo: 3, open: false},
                {id: 11, src:"@/../public/img/iconsMenu/1.png", text: "Tênis de mesa", aovivo: 3, open: false},
                {id: 12, src:"@/../public/img/iconsMenu/1.png", text: "Cs-Counter-Stike", aovivo: 3, open: false},
                {id: 13, src:"@/../public/img/iconsMenu/1.png", text: "Hóquei no gelo", aovivo: 3, open: false},
                {id: 14, src:"@/../public/img/iconsMenu/1.png", text: "Rugby", aovivo: 3, open: false},
                {id: 15, src:"@/../public/img/iconsMenu/1.png", text: "NFL", aovivo: 3, open: false},
                {id: 16, src:"@/../public/img/iconsMenu/1.png", text: "Boxe", aovivo: 3, open: false},
                {id: 17, src:"@/../public/img/iconsMenu/1.png", text: "Bandminton", aovivo: 3, open: false},
                {id: 18, src:"@/../public/img/iconsMenu/1.png", text: "Dardos", aovivo: 3, open: false},
                {id: 19, src:"@/../public/img/iconsMenu/1.png", text: "Criquete", aovivo: 3, open: false},
                {id: 20, src:"@/../public/img/iconsMenu/1.png", text: "Floorball", aovivo: 3, open: false},
                {id: 21, src:"@/../public/img/iconsMenu/1.png", text: "Curling", aovivo: 3, open: false},
                {id: 22, src:"@/../public/img/iconsMenu/1.png", text: "Futebol australiano", aovivo: 3, open: false}
            ],
            longoPrazo: [
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Futebol", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Tênis", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Basquete", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Voleibol", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Beisebol", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Handebol", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Hóquei no gelo", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Rugby", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "NFL", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Automobilismo", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Ciclismo", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Golfe", aovivo: 3},
                {id: 1, src:"@/../public/img/iconsMenu/100.png", text: "Dardos", aovivo: 3},
            ]
        }
    },
    methods:{
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>


<style scoped>
.menu-filter{
    background: #31343b;
    display: flex;
    text-align: center;
    text-align: center;
    justify-content: space-between;
}
.text-color{}
.filt{
    display: flex;
    flex-direction: column;
    color: #fff;
    text-align: center;
    background: rgba(0,0,0,0.85);
    position: absolute;
    padding: 3px;
}
.filt > a:hover{
    background: #5f5f5f;
    
}
a{
    margin: 0;
    font-size: 10px;
    padding: 0px 5px;
    font-weight: 500;
    color: #fff;
}
.sep{
    line-height: 20px;
    content: '';
    border-right: 1px solid #eee;
    width: 23px;
    line-height: 24px;
}

.lista{
    display: flex;
    flex-direction: column;
    background: #31343b;
}
.item{
    color: #fff;
    display: flex;
    flex-direction: column;
    line-height: 24px;
    font-size: 13px;
    border-top: 1px solid #cfcbcb;
}
.component{
    display: inline-flex;
    justify-content: space-between;
}
.iconMenu > img{
    position: relative;
    top: 2px;
    left: -10px;
}
.iconMenu{
    margin-left: 15px;
}
.component >p{
    padding: 0 30px;
    font-size: 14px;
}
.number{
    background: #232429;
    min-width: 24px;
    text-align: center;
    font-size: 9px;
}
.opcao{
    font-size: 11px;
    padding: 0px 50px;
    line-height: 25px;
    background:#5f5f5f;
}
.preTitulo{
    background:#5f5f5f;

}
.preTitulo > p{
    font-size: 14px;
    color: #fff;
    text-transform: uppercase;
    padding: 4px;
}
</style>