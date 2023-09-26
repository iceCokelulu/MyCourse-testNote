<template>
  <header>
    <h1>{{ title }}</h1>
  </header>
</template>

<script>
export default {
  props: ['title'],
};
</script>
<style scoped>
header {
  text-align: center;
  background-color: #087f5b;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  margin: 0;
  color: #fff;
}

/* header {
  width: 100%;
  height: 5rem;
  background-color: #640032;
  display: flex;
  justify-content: center;
  align-items: center;
}

header h1 {
  color: white;
  margin: 0;
} */
</style>
