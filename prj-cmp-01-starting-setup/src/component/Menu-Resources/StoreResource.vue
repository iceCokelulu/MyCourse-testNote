<template>
  <ul>
    <menu-resource
      v-for="res in resources"
      :key="res.id"
      :id="res.id"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></menu-resource>
  </ul>
</template>

<script>
import MenuResource from './MenuResource.vue';
export default {
  inject: ['resources'],
  components: {
    MenuResource,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
