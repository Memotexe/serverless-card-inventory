<template lang="">
  <div>
    <el-popover
      placement="top-start"
      :width="240"
      trigger="hover"
    >
      <template #reference>
        <el-card :body-style="{ padding: '0px' }">
          <img
            height="275"
            src="https://product-images.tcgplayer.com/fit-in/395x395/284137.jpg"
            class="image"
          />
          <div style="padding: 14px">
            <span>Giratina V</span>
            <div class="bottom">
              <el-button text class="button">Lost Origin</el-button>
            </div>
          </div>
        </el-card>
      </template>
      <el-table :data="data">
        <el-table-column width="60" property="grade" label="PSA" />
        <el-table-column width="75" property="cardNumber" label="Card #" />
        <el-table-column width="100" property="rarity" label="Rarity" />
      </el-table>
    </el-popover>
  </div>
</template>
<script setup>
  const data = [
  {
    grade: '9',
    cardNumber: '186',
    rarity: 'Ultra Rare'
  },
]
</script>
