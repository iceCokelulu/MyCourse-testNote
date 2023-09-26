const app = Vue.createApp({
  data() {
    return {
      name: 'John',
      age: 12,
      vueLink: 'https://vuejs.org/',
      courseGoalA: '<h2>Master Vue and build amazing app</h2>',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber > 0.5) {
        return 'You get this game';
      } else {
        return 'You lose this game';
      }
    },
  },
});

app.mount('#user-goal');
