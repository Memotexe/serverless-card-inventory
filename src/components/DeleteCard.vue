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

    name: 'DeleteCard',
    components: {
        Header,
        Footer,
    }
};
</script>
