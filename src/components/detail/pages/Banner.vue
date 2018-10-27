
<template>

   
    <div class="banner">
        <img :src="bannerUrl">
    </div>

    
</template>

<script>
export default {
    data(){
        return {
            bannerUrl : '//s0.meituan.net/bs/file?f=meishi.mobile:img/app_download_banner.png@a870276',
        }
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/css/var.scss';



    .banner{
       width: 7.5rem;
       height: 2.2rem;
       border-bottom: 1px solid #ddd;

       img{
           width: 100%;
       } 
    }

</style>


