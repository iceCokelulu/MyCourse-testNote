const app = Vue.createApp({
  data() {
    return {
      taskContent: [],
      inputTask: '',
      listData: true,
    };
  },
  computed: {
    displayLi() {
      return { active: this.listData, hidden: !this.listData };
    },
  },
  methods: {
    addTask() {
      this.taskContent.push(this.inputTask);
    },
    showList() {
      return (this.listData = !this.listData);
    },
  },
});

app.mount('#assignment');
