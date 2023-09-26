<template>
  <button :class="model">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['model'],
};
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #087f5b;
  border: 1px solid #087f5b;
  color: #fff;
  cursor: pointer;
  border-radius: 0.75rem;
}

button:hover,
button:active {
  background-color: #099268;
  border-color: #099268;
}

.flat {
  background-color: transparent;
  color: #3a0061;
  border: none;
}

.flat:hover,
.flat:active {
  background-color: #0ca678;
}
</style>
