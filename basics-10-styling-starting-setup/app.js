const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  computed: {
    boxAClasses() {
      return { active: this.boxASelected };
    },
  },
  methods: {
    boxSelected(num) {
      if (num === 'A') {
        this.boxASelected = !this.boxASelected;
      } else if (num === 'B') {
        this.boxBSelected = !this.boxBSelected;
      } else if (num === 'C') {
        this.boxCSelected = !this.boxCSelected;
      }
    },
  },
});

app.mount('#styling');
