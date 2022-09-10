<template lang="">
    <div>
      <el-dropdown>
        <span class="el-dropdown-link">
          Rarity<el-icon class="el-icon--right"><arrow-down /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
            <el-dropdown-item :icon="Plus"> Action 2</el-dropdown-item>
            <el-dropdown-item :icon="Plus">Action 3</el-dropdown-item>
            <el-dropdown-item :icon="Plus">Action 4</el-dropdown-item>
            <el-dropdown-item :icon="Plus">Action 5</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </template>
  
  <script  setup>
  import {
    ArrowDown,
    Plus,
  } from "@element-plus/icons-vue";
  </script>
  
  <style>
  .block-col-2 .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }
  </style>
  