<template>
  <div>
    <li>
      <h2>{{ name }}</h2>
      <button @click="showFavorite">
        Toggle {{ ShowList ? '(Favorite)' : '' }}
      </button>
      <button @click="isShowList">
        {{ friendsIsFavorite ? 'Hidden' : 'Show' }}
      </button>
      <button @click="$emit('delete', userId)">Delete</button>
      <ul v-if="ShowList">
        <li><strong>age:</strong>{{ userAge }}</li>
        <li><strong>email:</strong>{{ userEmail }}</li>
      </ul>
    </li>
  </div>
</template>

<script>
export default {
  props: ['userId', 'userName', 'userAge', 'userEmail', 'isFavorite'],
  data() {
    return {
      ShowList: true,
    };
  },
  methods: {
    isShowList() {
      this.ShowList = !this.ShowList;
    },
    showFavorite() {
      this.$emit('toggle-favorite', this.userID);
    },
  },
};
</script>
<style scoped></style>
