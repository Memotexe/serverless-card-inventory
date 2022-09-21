<template lang="">
  <div>
    <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Sort By"
    size="small"
    clearable
  />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const initials = ['Alpha', 'Rarity', 'Dex Number']
  
  const value = ref('')
  const options = Array.from({ length: 3 }).map((_, idx) => ({
  value: `Option ${idx}`,
  label: `${initials[idx]}`,
}))
  </script>
  
  <style scoped>
  .el-select-v2 {
    margin-right: 20px;
    margin-top:1em
  }
  </style>