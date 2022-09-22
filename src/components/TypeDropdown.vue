<template lang="">
  <div>
    <el-select-v2
    v-model="value"
    :options="options"
    placeholder="Choose Type"
    size="small"
    clearable
  />
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  const initials = ['Normal', 'Fire', 'Water', 'Grass', 'Electric',
   'Ice', 'Fighting', 'Poison', 'Ground', 'Flying', 'Psychic', 'Bug',
  'Rock', 'Ghost', 'Dark', 'Dragon', 'Steel', 'Fairy']
  
  const value = ref('')
  const options = Array.from({ length: 18 }).map((_, idx) => ({
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
