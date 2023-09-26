const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  watch: {
    sum() {
      const that = this;
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  computed: {
    sum() {
      if (this.number < 37) {
        return 'Not there yet';
      } else if (this.number === 37) {
        return (this.number = 37);
      } else {
        return 'Too much!';
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
      console.log(this.number);
    },
  },
});

app.mount('#assignment');
