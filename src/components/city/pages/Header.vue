
<template>
    <div class="header">
        <router-link to='/'>
            <span class="header-left iconfont">
                &#xe624;
            </span>
        </router-link>
        
        <div class="header-title">选择城市</div>
    </div>
</template>

<script>
export default {
    
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


