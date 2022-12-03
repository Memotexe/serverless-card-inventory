<template>
  <div>
    <div>
    <el-row>
      <el-col
        v-for="(card, index) in Cards"
        :key="card"
        :span="5"
        style="margin-left: 3.5em ; margin-bottom:2em"
      >
        <el-popover placement="top-start" :width="240" trigger="hover">
          <template #reference>
            <el-card :body-style="{ padding: '0px' }">
              <img
                height="275"
                :src=Cards[index].imageURL
              />
              <div style="padding: 1em">
                <span>{{Cards[index].name}}</span>
                <div class="bottom">
                  <el-button text class="button">Fossil</el-button>
                </div>
                <span style="font-size:small">Owned: {{Cards[index].owned}}</span>
              </div>
            </el-card>
          </template>
          <el-table :data="[Cards[index]]">
            <el-table-column width="60" property="grade" label="PSA" />
            <el-table-column width="75" property="cardID" label="Card #" />
            <el-table-column width="100" property="rarity" label="Rarity" />
          </el-table>
        </el-popover>
      </el-col>
    </el-row>
  </div>
  </div>
</template>
<script>
import Auth from "@aws-amplify/auth";

export default {
  name: "Catalog",


  data() {
    return {
      Cards: null,

    };
  },
  mounted() {
    Auth.currentAuthenticatedUser().then((user)=>{
      const id = user.attributes.sub;
      fetch(
      "https://5vbdr30oze.execute-api.us-east-1.amazonaws.com/default/GetCards",
      {
        method: "POST",
        body: JSON.stringify({ userID: id }),
      }
    )
      .then((res) => res.json())
      .then((body) => {
        this.Cards = body;
        console.log(this.Cards);
      });
    })
    

  },
};
</script>
