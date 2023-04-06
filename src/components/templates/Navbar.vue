<template>
    <nav class="nav" >
        <div class="logo">
            <router-link to="/" exact>
                <img src="../../assets/logo.png" alt="">
            </router-link>
        </div>
        <ul>
            <router-link to="/"  exact-active-class="active">
                <a>Esportes</a>
            </router-link>
        <router-link to="/aovivo"><a>Ao Vivo</a></router-link>
        <router-link to="/cassino" ><a>Cassino</a></router-link>
        <router-link to="/casinoaovivo" ><a>Cassino Ao Vivo</a></router-link>
        <router-link to="/originais" ><a>Originais F12</a></router-link>
        <router-link to="/crashGames" ><a>Crash Games</a></router-link>
        <router-link to="/classicos" ><a>Clássicos</a></router-link>
        <router-link to="/raspadinhas" ><a>Raspadinhas</a></router-link>
        <router-link to="/virtuais" ><a>Virtuais</a></router-link>
        <router-link to="/e-sports" ><a>E-Sports</a></router-link>
        <router-link to="/promocao" ><a>Promoções</a></router-link>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .nav{
        background-color: #232520;
        display: flex;
        justify-content: space-between;
        padding: 10px 6px;
    }
    .logo > a> img{
        margin-top: 15px;
        width: 120px;
    }
    ul{
        line-height: 45px;
    }
    a{
        margin-right: 8px;

    }
    a:active{
        color: #C9F73C;
    }
</style>