<template>
  <li>
    <base-card>
      <div>
        <header>
          <h3>{{ title }}</h3>
          <base-button @click="deleteResource(id)"> 删除 </base-button>
        </header>
      </div>
      <p>{{ description }}</p>
      <nav>
        <img :src="link" />
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['deleteResource'],
  data() {
    return {};
  },
};
</script>
<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

img {
  object-fit: cover;
  width: 18.75rem;
  height: 11.25rem;
  border-radius: 0.6875rem;
}
</style>
