<script>
    import { Authenticator } from '@aws-amplify/ui-vue';
    import '@aws-amplify/ui-vue/styles.css';
    import MainPage from '../components/MainPage.vue';

    export default{
      name: "Login",
      components:{
    Authenticator,
    MainPage,
}
    }
</script>
  
  
  
  <template>
    <authenticator>
        <MainPage/>
        <button @click="signOut">Sign Out</button>
    </authenticator>
  </template>

