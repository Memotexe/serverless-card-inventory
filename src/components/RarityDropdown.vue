<template lang="">
  <div>
    <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Choose Rarity"
    size="small"
    clearable
  />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const initials = ['Common', 'Uncommon', 'Rare', 'Ultra Rare', 'Promo',]
  
  const value = ref('')
  const options = Array.from({ length: 5 }).map((_, idx) => ({
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