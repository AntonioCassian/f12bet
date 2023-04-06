<template>
    <div class="line">
        <SocialLine />
        <div class="opt">
            <div class="date-time">
                <span>{{timestamp()}}</span>
                <span>{{ ano() }}</span>
            </div>
            <div class="language">
                <div class="opt-language">
                    <span class="lang-img">
                        <img src="../../../public/img/icons/14.png" alt="">
                    </span>
                    <span class="lang-img">pt</span>
                </div>
                <div class="opt-language troca">
                        <span class="lang-img">
                            <img src="../../../public/img/icons/1.png" alt="">
                        </span>
                        <span class="lang-img">en</span>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
    import SocialLine from './SocialLine.vue';
export default{
name:'LineTop',
components: {
    SocialLine
},
methods:{
    ano(){
        return this.yarn = new Date().toLocaleDateString();        
    },
    timestamp(){
        return this.time = new Date().toLocaleTimeString().slice();
    }
},

}
</script>

<style scoped>
    .line{
        color: #fff;
        background: #36373c;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px;
    }


    
    .date-time{
        position: relative;
        bottom: -5px;
    }
    .opt{
        display: flex;
        align-content: center;
        justify-content: space-between;
    }
    .opt-language{
    font-size: 11px;
    text-transform: uppercase;
    color: #fff;
    padding: 0 15px;
    padding: 0px 20px;
    line-height: 19px;
}
.language{
    position: relative;
    cursor: pointer;
}
.language:hover .troca{
    display: block;
}
.troca{
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    min-width: 50%;
    z-index: 999;
    background-color: #36373c;
}

.language::after{
    content: "\f0d7";
    font-family: "FontAwesome";
    font-size: 12px;
    color: #fff;
    position: absolute;
    top: 8px;
    right: -6px;
}
.lang-img{
    display: inline-block;
    vertical-align: middle;
    line-height: 30px;
}

.lang-img > img{
    margin-right: 2px;
}
</style>
