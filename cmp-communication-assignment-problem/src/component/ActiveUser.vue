<template>
  <section>
    <div class="box-container">
      <h1>{{ userId }}</h1>
      <h2>Name:{{ userName }}</h2>
      <h3>Age:{{ userAge }}</h3>
      <div @click="$emit('delete', userId)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['userId', 'userName', 'userAge'],
  data() {
    return {};
  },
};
</script>
