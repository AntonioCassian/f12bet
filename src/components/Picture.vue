<template>
    <div class="picture">
        <img src=".././assets/picture.png" :alt="alt"/>
    </div>
</template>

<script>
export default {
    name: "PictureApp",
    data(){
        return{
        slid: ".././assets/picture.png",
        alt: "Enquanto eu não faço o slide"
        }
    }
}
</script>

<style>
.picture{
    width: 100%;
}
.picture > img{
    width: 100%;
}
</style>