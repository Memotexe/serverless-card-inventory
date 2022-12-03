<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main style="align-self: center; padding-left: 0%">
        <el-form  :model="form">
          <el-form-item
            label="Card to Delete:"
          >
            <el-autocomplete
              v-model="form.card"
              value-key="name"
              clearable
              class="inline-input w-50"
              placeholder="Select a Card"
              :fetch-suggestions="searchCards"
              @select="handleCardSelect"
            >
              <template #default="{ item }">
                <span>{{ item.name }} - </span>
                <span>{{ item.rarity }}</span>
              </template>
            </el-autocomplete>
            <!-- Make hte input of the card's name the same length as the grade -->
          </el-form-item>
          <el-form-item>
            <el-button type="danger" @click="onSubmit" plain>Submit</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Auth from "@aws-amplify/auth";

export default {
  name: "DeleteCard",
  components: {
    Header,
  },
  data() {
    return {
      form: {
        card: null,
      },
      CardList: null,
    };
  },
  mounted() {
    Auth.currentAuthenticatedUser().then((user) => {
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
          this.CardList = body.filter( (card) => {
            return (card.owned);
          });
          console.log(this.CardList);
        });
    });
  },
  methods: {
    searchCards(queryString, cb) {
      let cards = JSON.parse(JSON.stringify(this.CardList));
      if (queryString == "null") {
        queryString = null;
      }
      const results = queryString
        ? cards.filter(this.cardFilter(queryString))
        : cards;
      cb(results);
    },
    cardFilter(queryString) {
      return (card) => {
        return card.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    },
    handleCardSelect(card) {
      this.form.cardID = card.cardID;
    },
    onSubmit() {
      Auth.currentAuthenticatedUser().then((user) => {
        const id = user.attributes.sub;
        fetch(
          "https://5vbdr30oze.execute-api.us-east-1.amazonaws.com/default/DeleteCard",
          {
            method: "DELETE",
            body: JSON.stringify({
              userID: id,
              cardID: this.form.cardID
            }),
          }
        ).then((res) => console.log(res.ok));
      });
    },
  },
};
</script>
