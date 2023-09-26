<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  data() {
    return {
      optionActive: null,
    };
  },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}
li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}
button:hover {
  box-shadow: 0 0 1px #0000ff;
}

.active {
  border-color: tomato;
}
.active button {
  color: tomato;
}
</style>
