<template>
    <div class="dialog">
        <p>抱歉，暂无当前城市数据，请先选择其他城市!</p>
    </div>
</template>


<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.dialog{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    margin-top: 4.5rem;
    width: 3.5rem;
    height: 1rem;
    color: #fff;
    font-size: 0.3rem;
    line-height: 0.5rem;
    text-align: center;
    padding: 0.3rem 0.3rem;
    background: rgba(0,0,0,0.7);
    border-radius: 0.1rem;
    z-index: 100;

    p{
        text-indent: 10%;
    }
}

</style>
