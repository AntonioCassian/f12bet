<template>
  <div class="home">
    
    <Header />
    <div class="container">
      <aside>
        <ContentTop />
        <MenuBar />
      </aside>
      <main>
        <Picture />
        <TabelaMain 
        :futebol_jogos="futebol_jogos"
        :basquete_jogos="basquete_jogos"
        :tenis_jogos="tenis_jogos"
         />
      </main>
      <aside>
        <BoletimAposta/>
      </aside>
    </div>
      <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Picture from '@/components/Picture.vue'
import ContentTop from '@/components/ContetTop.vue'
import TabelaMain from '@/components/Table.vue'
import BoletimAposta from '@/components/Boletim.vue'
import MenuBar from '@/components/MenuBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    ContentTop,
    MenuBar,
    TabelaMain,
    Picture,
    BoletimAposta,
    Footer
  },
  data(){
    return{
      futebol_jogos: [
            {id: 1, data:"04/04", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 2, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 3, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 4, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 5, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 6, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 7, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 8, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 9, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"},
            {id: 10, data:"04/05", hora:"16:00", time1: "Chelsea", time2:"Liverpool", um: 2.25, empat: 3.43, dois: 3.19, pessoas: "+1185"}
            ],
            basquete_jogos: [
                {id: 1, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", um: 1.06, dois: 7.80, pessoas: "+151"},
                {id: 2, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", um: 1.06, dois: 7.80, pessoas: "+151"},
                {id: 3, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", um: 1.06, dois: 7.80, pessoas: "+151"},
                {id: 4, data:"06/04", hora:"15:45", time1: "Real Madrid", time2:"FC Bayern Muncher", um: 1.06, dois: 7.80, pessoas: "+151"},
            ],
            tenis_jogos: [
                {id: 1, data:"06/04", hora:"14:20", time1: "Bautista-Agut, Roberto", time2:"Halys, Quentin", um: 1.58, dois: 2.29, pessoas: "+20"},
            ],
    }
  }
}
</script>

<style>
.home{
  background: #000000;
}
.container{
  display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 300px 2.5fr 300px;
    gap: 2px;
}
</style>
