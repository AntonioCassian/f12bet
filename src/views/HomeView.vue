<template>
  <div class="home">
    <ComHeader />
    <div class="container">
      <aside>
        <ContentTop />
        <MenuBar />
      </aside>
      <main>
        <Picture />
        <TabelaMain />
      </main>
      <aside>
        <BoletimAposta/>
      </aside>
    </div>
      <FooterApp />
  </div>
</template>

<script>
// @ is an alias to /src
import ComHeader from '@/components/Header.vue'
import Picture from '@/components/Picture.vue'
import ContentTop from '@/components/ContetTop.vue'
import TabelaMain from '@/components/Table.vue'
import BoletimAposta from '@/components/Boletim.vue'
import MenuBar from '@/components/MenuBar.vue'
import FooterApp from '@/components/Footer.vue'
export default {
  name: 'HomeView',
  components: {
    ComHeader,
    ContentTop,
    MenuBar,
    TabelaMain,
    Picture,
    BoletimAposta,
    FooterApp
  },
  data(){
    return{
      data:() => ({
        
    }),
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
