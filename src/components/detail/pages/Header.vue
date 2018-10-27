
<template>

    <div class="header" :style="styleObj">
        <router-link to='/'>
            <span class="header-left iconfont">
                &#xe624;
            </span>
        </router-link>
        
        <div class="header-title">团购详情</div>
    </div>

    

    
</template>

<script>
export default {

    data(){
        return{
            styleObj:{
                position: 'relative',
            }
        }
    },
    mounted(){
        window.addEventListener('scroll', () => {
            let scrollTop = document.documentElement.scrollTop;
           
            if( scrollTop > 60 ){
                this.styleObj.position = 'fixed';
            } else{
                this.styleObj.position = 'relative';
            }
        })
        
    },
    activated(){
        document.documentElement.scrollTop = 0;
    }
}
</script>

<style lang="scss" scoped>

@import '../../../assets/css/var.scss';

.header{
    position: relative;
    width: 100%;
    height: 1.01rem;
    font-size: 0.32rem;
    line-height: 1.01rem;
    color: #fff;
    background: $bgColor;
    z-index: 2;

    a{
        color: #fff;
    }

    &-left{
        position: absolute;
        width: 0.4rem;
        padding: 0 0.2rem;
        text-align: center;
        font-weight: bold;
    }

    &-title{
        text-align: center;
    }
}

</style>


