
<template>
    <div class="detail">
        <detail-header></detail-header>
        <detail-banner></detail-banner>
        <detail-showimg></detail-showimg>
    </div>
</template>

<script>

import DetailHeader from './pages/Header.vue'
import DetailBanner from './pages/Banner.vue'
import DetailShowimg from './pages/ShowImg.vue'

export default {
    components:{
        DetailHeader,
        DetailBanner,
        DetailShowimg
        
    }
}
</script>

<style lang="scss" scoped>

</style>

