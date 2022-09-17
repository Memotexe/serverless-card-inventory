<template>
  <div class="common-layout">
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main>
            <div>TODO style n content</div>
        </el-main>
        <el-footer>
            <Footer/>
        </el-footer>
    </el-container>
  </div>
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {

    name: 'AddCard',
    components: {
        Header,
        Footer,
    }
};
</script>
