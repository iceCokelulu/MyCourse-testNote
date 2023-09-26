<template>
  <div>
    <the-header></the-header>
    <button @click="selectedComponent('active-goals')">Active Goals</button>
    <button @click="selectedComponent('mange-goals')">Mange Goals</button>
    <keep-alive>
      <component :is="componentName"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import ActiveGoals from './components/ActiveGoals.vue';
import MangeGoals from './components/MangeGoals.vue';

export default {
  components: {
    TheHeader,
    ActiveGoals,
    MangeGoals,
  },
  data() {
    return {
      componentName: '',
    };
  },
  methods: {
    selectedComponent(cmp) {
      this.componentName = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
