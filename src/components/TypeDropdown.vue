<template lang="">
  <div>
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Choose Type"
      size="small"
      clearable
      :change="typeSorting()"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(['change'])
const initials = [
  "Fire",
  "Water",
  "Grass",
  "Lightning",
  "Fighting",
  "Colorless",
  "Psychic",
  "Bug",
  "Trainer",
];

const value = ref("");
const options = Array.from({ length: 9 }).map((_, idx) => ({
  value: idx,
  label: `${initials[idx]}`,
}));


function typeSorting(){
  if(value.value === ""){
    return value;
  }
  let type = options[value.value].label;
  emit('change',type);
}
</script>

<style scoped></style>
