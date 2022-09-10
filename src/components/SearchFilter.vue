<template>
    <div class="demo-input-size">
    <el-input
      v-model="input2"
      class="w-50 m-2"
      placeholder="Search Card"
      :suffix-icon="Search"
    />
    
  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'

const input2 = ref('');
</script>
