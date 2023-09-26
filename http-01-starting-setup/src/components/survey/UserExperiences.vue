<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="loadData">Load Submitted Experiences</base-button>
      </div>
      <p v-if="isLoading">Loading........</p>
      <p v-else-if="!isLoading && error">{{ error }}</p>
      <p v-else-if="!isLoading && (!results || results.length === 0)">
        There is not Data!
      </p>
      <ul v-else-if="!isLoading && results && results.length > 0">
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  // props: ['results'],
  components: {
    SurveyResult,
  },
  data() {
    return {
      results: [],
      isLoading: false,
      error: null,
    };
  },
  beforeMount() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.error = null;
      this.isLoading = true;
      this.$axios
        .get(
          'https://vue-http-demo-cd3f0-default-rtdb.asia-southeast1.firebasedatabase.app/surverys.json'
        )
        .then((response) => {
          // console.log(response);
          if (response.statusText === 'OK') {
            return response.data;
          }
        })
        .then((data) => {
          this.isLoading = false;
          const results = [];
          for (const id in data) {
            results.push({
              id: id,
              name: data[id].name,
              rating: data[id].rating,
            });
          }
          this.results = results;
        })
        .catch((error) => {
          console.log(error);
          this.isLoading = false;
          this.error = '请求数据时发生未知错误';
        });
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
