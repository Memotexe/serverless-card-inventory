<template>
  <div class="user-menu">
    <el-dropdown>
      <el-icon><setting /></el-icon>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>dropdown item 1</el-dropdown-item>
          <el-dropdown-item>dropdown item 2</el-dropdown-item>
          <el-dropdown-item>dropdown item 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
    <span>User</span>
  </div>
  <el-header>
    <el-row :gutter="10">
      <el-col :span="10"> </el-col>
      <el-col :span="1.4">
        <router-link to="/"
          ><el-button type="success" plain>View</el-button></router-link
        >
      </el-col>
      <el-col :span="1.4">
        <router-link to="/card/add"
          ><el-button type="primary" plain>Add</el-button></router-link
        >
      </el-col>
      <el-col :span="1.4">
        <router-link to="/card/delete"
          ><el-button type="danger" plain>Delete</el-button></router-link
        >
      </el-col>
      <el-col :span="10"> </el-col>
    </el-row>
  </el-header>
</template>

<script setup>
import { Menu as Setting } from "@element-plus/icons-vue";
</script>
<style scoped>
.user-menu {
  margin-top: 0px;
  text-align: right;
  font-size: 18px;
}
.el-icon {
  margin-right: 8px;
  margin-top: 2.5px;
}

a {
  text-decoration: none;
}
</style>
