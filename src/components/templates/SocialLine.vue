<template>
    <div class="social">
            <a href="" class="link-ig">
                <span>Instagram</span>
            </a>
            <a href="">
                <img src="@/../public/img/icons/twiter.svg" alt="">
            </a>
            <a href="">
                <img src="@/../public/img/icons/youtube.svg" alt="">
            </a>
            <a href="">
                <img src="@/../public/img/icons/telegram.svg" alt="">
            </a>
            <a href="">
                <img src="@/../public/img/icons/tiktok.svg" alt="">
            </a>
        </div>
</template>

<script>
export default {
    name: 'Social_Line'
}
</script>


<style scoped>
    .social{
        margin: 5px 0;
    }
    .social > a{
        background-color: transparent;
    background-repeat: no-repeat;
    background-size: 25px;
    float: left;
    line-height: 25px;
    width: 25px;
    height: 25px;
    margin: 0 5px;
    -webkit-mask-image: unset;
    }
    .social a:hover{
        background: #C9F73C;
        color: #fff;
    }
    .social >a >span{
        display: none;
    }
    .link-ig{
        background-image: url('@/../public/img/icons/instagram.svg');
    }
    .link-ig:hover{
        background-image: url('@/../public/img/icons/instahover.svg');
        background-color: transparent;
    }
</style>