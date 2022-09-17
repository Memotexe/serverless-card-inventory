<template>
  <div>
    <p>
      <Card />
    </p>
    <p>
      <el-pagination
        small
        background
        layout="prev, pager, next"
        :total="50"
        class="mt-4"
      />
    </p>
  </div>
</template>
<script>
import Card from "./Card.vue";
export default {
  name: "Catalog",
  components: {
    Card,
  },
};
</script>
