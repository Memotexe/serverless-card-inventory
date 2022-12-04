<template>
  <div class="common-layout">
    <el-container>
      <el-header> <Header /> </el-header>
      <el-container>
        <el-container>
          <el-main><Catalog /> </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Catalog from "./Catalog.vue";

export default {
  name: "Mainpage",
  components: {
    Header,
    Catalog,
  },
};
</script>
<style scoped>
.el-aside {
  width: 200px;
}
</style>
