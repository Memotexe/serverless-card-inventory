<script>
import { Authenticator } from "@aws-amplify/ui-vue";
import MainPage from "../components/MainPage.vue";
import '@aws-amplify/ui-vue/styles.css';
import { Amplify } from 'aws-amplify';
import awsconfig from '../aws-exports';

export default {
  name: "Login",
  components: {
    Authenticator,
    MainPage,
  },
};

Amplify.configure(awsconfig);
</script>

<template>
  <authenticator>
    <template v-slot="{signOut}">
      <el-button type="primary" style="float:right" @click="signOut">Sign Out</el-button>
      <MainPage />
    </template>
  </authenticator>
</template>
