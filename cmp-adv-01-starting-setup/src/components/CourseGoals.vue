<template>
  <div>
    <slot :userName="name"></slot>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'John',
    };
  },
};
</script>
<style scoped></style>
