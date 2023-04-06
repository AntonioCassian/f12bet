<template>
    <div class="contentTop">
        <div class="bg-header">
            <div class="headerTop">
                Pré-jogo
            </div>
        </div>
        <div class="form">
            <form action="" class="form-content">
                <input type="text" placeholder="Buscar">
                <button>II</button>
            </form>
        </div>
        <div class="content-body">
            <div class="content-sec">
                <a href="">
                <span>
                    <img src="../assets/download.png" alt="">
                </span>
                <div class="txt-cont">
                    <span class="cont-title">Futebol</span>
                    <span class="cont-jogo">Carioca, Série A, Eliminatórias</span>
                </div>
                </a>
            </div>
            <div class="content-sec">
                <a href="">
                <span>
                    <img src="../assets/download.png" alt="">
                </span>
                <div class="txt-cont">
                    <span class="cont-title">Futebol</span>
                    <span class="cont-jogo">Carioca, Série A, Eliminatórias</span>
                </div>
                </a>
            </div>
            <div class="content-sec">
                <a href="">
                <span>
                    <img src="../assets/download.png" alt="">
                </span>
                <div class="txt-cont">
                    <span class="cont-title">Futebol</span>
                    <span class="cont-jogo">Carioca, Série A, Eliminatórias</span>
                </div>
                </a>
            </div>
            <div class="content-sec">
                <a href="">
                <span>
                    <img src="../assets/download.png" alt="">
                </span>
                <div class="txt-cont">
                    <span class="cont-title">Futebol</span>
                    <span class="cont-jogo">Carioca, Série A, Eliminatórias</span>
                </div>
                </a>
            </div>
            <div class="content-sec">
                <a href="">
                <span>
                    <img src="../assets/download.png" alt="">
                </span>
                <div class="txt-cont">
                    <span class="cont-title">Futebol</span>
                    <span class="cont-jogo">Carioca, Série A, Eliminatórias</span>
                </div>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
    .bg-header{
        background: #232429;
    }
    .headerTop{
        margin-left: 10px;
        display: inline-block;
        font-size: 12px;
        text-transform: uppercase;
        color: #fff;
        font-weight: bold;
        line-height: 30px;
    }
    
    .form{
        padding-top: 7px;
        padding: 10px 0;
    }
    .form-content{
        width: 90%;
        padding: 0 10px;
    }
    button{
        position: absolute;
        top: 140px;
        left: 260px;
        z-index: 9999;
        width: 20px;
        height: 20px;
    }
    input{
        background: #121315;
        border-radius: 5px;
        border: none;
        height: 24px;
        font-size: 11px;
        width: 100%;
    }
    .content-body{
        padding: 0 5px;
    }
    .content-sec{
        display: inline-block;
        background: #36373C;
        padding: 6px 14px 0 0;
        border: 0;
        border-radius: 3px;
        width: 95%;
        margin-bottom: 5px;
    }
    a{
        display: flex;
        margin: 0;
    }
    img{
        width: 40px;
        height: 40px;
    }
    .txt-cont{
        position: relative;
        top: 3px;
        left: 10px;
    }
    .cont-title{
        font-size: 10px;
        color: #C9F73C;
    
    }
    .cont-jogo{
        display: block;
        font-size: 12px;
        line-height: 20px;
        color: #fff;
    }
</style>