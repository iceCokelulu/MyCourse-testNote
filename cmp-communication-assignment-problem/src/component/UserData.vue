<template>
  <section>
    <div class="box-container">
      <form @submit.prevent="$emit('save-data', userName, userAge)">
        <div class="input-box">
          <label for="">Name:</label>
          <input type="text" v-model="userName" />
        </div>
        <div class="input-box">
          <label for="">Age:</label>
          <input type="text" v-model="userAge" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      userName: '',
      userAge: '',
    };
  },
};
</script>
