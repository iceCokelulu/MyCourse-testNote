<template>
  <section>
    <li>
      <form action="#" @submit="saveNewFriend">
        <div class="input-box">
          <label for="">Name</label>
          <input type="text" v-model="enterName" />
        </div>
        <div class="input-box">
          <label for="">Age</label>
          <input type="text" v-model="enterAge" />
        </div>
        <div class="input-box">
          <label for="">Email</label>
          <input type="text" v-model="enterEmail" />
        </div>
        <button>Submit</button>
      </form>
    </li>
  </section>
</template>
<script>
export default {
  data() {
    return {
      enterName: '',
      enterAge: '',
      enterEmail: '',
    };
  },
  methods: {
    saveNewFriend() {
      this.$emit('add-content', this.enterName, this.enterAge, this.enterEmail);
    },
  },
};
</script>
