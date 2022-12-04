<template lang="">
  <div>
    <el-select-v2
      v-model="value"
      :options="options"
      placeholder="Choose Rarity"
      size="small"
      clearable
      :change="raritySorting()"
    />
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
const emit = defineEmits(['change'])
const initials = ["Common", "Uncommon", "Rare", "Holo Rare"];

const value = ref("");
const options = Array.from({ length: 4 }).map((_, idx) => ({
  value: idx,
  label: `${initials[idx]}`,
}));

function raritySorting(){
  if(value.value === ""){
    return value;
  }
  let rarity = options[value.value].label;
  emit('change',rarity)
}
</script>

<style scoped></style>
