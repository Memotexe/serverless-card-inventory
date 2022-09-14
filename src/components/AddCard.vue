<template>
  <div>
    <Header></Header>
    <div>TODO style n content</div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from './Header.vue';
import Footer from './Footer.vue';

export default {

    name: 'AddCard',
    components: {
        Header,
        Footer,
    }
};
</script>
