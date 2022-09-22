<template>
  <div class="common-layout">
    <el-container>
      <el-header> <Header /> </el-header>
      <el-container>
        <el-aside><Filter /></el-aside>
        <el-container>
          <el-main><Catalog /> </el-main>
          <el-footer><Footer /></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Filter from "./Filters.vue";
import Catalog from "./Catalog.vue";
import Footer from "./Footer.vue";

export default {
  name: "Mainpage",
  components: {
    Header,
    Filter,
    Catalog,
    Footer,
  },
};
</script>
<style scoped>
.el-aside {
  width: 200px;
}
</style>
