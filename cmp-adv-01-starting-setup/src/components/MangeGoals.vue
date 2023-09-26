<template>
  <div>
    <h1>Mange Goals</h1>
    <input type="text" ref="goal" />
    <button @click="checkInputContent">Checked the file</button>
  </div>
  <Teleport to="body">
    <error-alert v-if="inputContent">
      <h2>Input is invalid!</h2>
      <p>Please enter at least a few characters...</p>
      <button @click="cancelDaiLog">affirm</button>
    </error-alert>
  </Teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue';
export default {
  components: {
    ErrorAlert,
  },
  data() {
    return {
      inputContent: false,
    };
  },
  methods: {
    checkInputContent() {
      const inputValue = this.$refs.goal.value;
      if (inputValue === '') {
        this.inputContent = true;
      }
    },
    cancelDaiLog() {
      this.inputContent = false;
    },
  },
};
</script>
<style scoped></style>
