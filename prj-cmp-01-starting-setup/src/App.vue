<template>
  <menu-header title="CoCo日常简餐饮食小店"></menu-header>
  <the-resource></the-resource>
</template>

<script>
import MenuHeader from './component/layout/MenuHeader.vue';
import TheResource from './component/Menu-Resources/TheResource.vue';

export default {
  components: {
    MenuHeader,
    TheResource,
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  padding: 0;
}
</style>
