<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main style="align-self: center; padding-left: 0%">
        <el-form :model="form">
          <el-form-item label="Card">
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
                <span >{{ item.name }} - </span>
                <span >{{ item.rarity }}</span>
              </template>
            </el-autocomplete>
            <!-- Make hte input of the card's name the same length as the grade -->
          </el-form-item>
          <el-form-item label="Grade">
            <el-select
              v-model="form.grade"
              placeholder="please select your grade"
            >
              <el-option label="ungraded" value="0" />
              <el-option label="1" value="1" />
              <el-option label="2" value="2" />
              <el-option label="3" value="3" />
              <el-option label="4" value="4" />
              <el-option label="5" value="5" />
              <el-option label="6" value="6" />
              <el-option label="7" value="7" />
              <el-option label="8" value="8" />
              <el-option label="9" value="9" />
              <el-option label="10" value="10" />
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit" plain>Submit</el-button>
            <el-button type="danger" @click="onCancel" plain>Cancel</el-button>
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
  name: "AddCard",
  components: {
    Header,
  },
  data() {
    return {
      form: {
        card: null,
        grade: null,
        cardID: null,
      },
      CardList: null,
    };
  },
  mounted() {
    fetch(
      "https://5vbdr30oze.execute-api.us-east-1.amazonaws.com/default/GetCards",
      {
        method: "POST",
        body: JSON.stringify({ userID: "0" }),
      }
    )
      .then((res) => res.json())
      .then((body) => {
        this.CardList = body;
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
          "https://5vbdr30oze.execute-api.us-east-1.amazonaws.com/default/AddCard",
          {
            method: "POST",
            body: JSON.stringify({
              userID: id,
              grade: this.form.grade,
              cardID: this.form.cardID,
            }),
          }
        ).then((res) => console.log(res.ok));
      });
    },
    onCancel() {
      this.form = {
        card: null,
        grade: null,
      };
    },
  },
};
</script>
