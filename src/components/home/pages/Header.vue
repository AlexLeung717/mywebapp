
<template>
    <div class="header">
       <div class="header-search">
           <i class="iconfont">
               &#xe632;
           </i>
           <span>请输入商家/品类/商圈</span>
       </div>
       <router-link to='/city'>
            <div class="header-right">
              {{city}}
              <i class="iconfont">
                &#xe6aa;
              </i>
            </div>
       </router-link>
    </div>
</template>

<script>

import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['city'])
    }
}
</script>


<style lang="scss" scoped>

@import '../../../assets/css/var.scss';

.header{
    width: 100%;
    height: 1.01rem;
    font-size: 0.32rem;
    line-height: 1.01rem;
    color: #fff;
    background: #06c1ae;
    border-bottom: 1px solid #21897d;
    display: flex;

    a{
        color: #fff;
    }

    &-search{
        flex: 1;
        height: 0.64rem;
        line-height: 0.64rem;
        margin-top: 0.2rem;
        margin-left: 0.4rem;
        background: rgba(0,0,0,0.15);
        border-radius: 0.06rem;
        position: relative;

        .iconfont{
            position: absolute;
            left: 0.3rem;
            font-size: 0.26rem;
            color: #fff;
        }

        span{
            width: 100%;
            font-size: .26rem;
            color: #68dbce;
            padding-left: .8rem;
            box-sizing: border-box;
            display: block;
        }
    }

    &-right{
        font-size: 0.30rem;
        padding: 0 0.2rem;

        .iconfont{
            padding-top: 0.2rem;
        }
    }
}

</style>

