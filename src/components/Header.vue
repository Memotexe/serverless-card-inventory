<template lang="">
  <el-header style="text-align: right; font-size: 12px">
    <div class="toolbar">
      <el-dropdown>
        <el-icon style="margin-right: 8px; margin-top: 1px"
          ><setting
        /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item><router-link to="/">View</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/card/add">Add</router-link></el-dropdown-item>
            <el-dropdown-item><router-link to="/card/delete">Delete</router-link></el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <span>User</span>
    </div>
  </el-header>
</template>

<script setup>
import { Menu as Setting } from "@element-plus/icons-vue";
</script>

