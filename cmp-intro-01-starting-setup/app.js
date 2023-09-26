const app = Vue.createApp({
  data() {
    return {
      showList: true,
      userLists: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: 012345678991,
          email: 'manuel@localhost.com',
        },
        {
          id: 2,
          name: 'Julie Jones',
          phone: 09876543221,
          email: 'julie@localhost.com',
        },
      ],
    };
  },

  methods: {
    getList(id) {
      this.showList = !this.showList;
    },
  },
});

app.component('friend-content', {
  template: ` <ul>
  <li v-for="user in userLists">
    <h2>{{user.name}}</h2>
    <button @click="getList(user.id)">Show Details</button>
    <ul v-if="showList">
      <li><strong>Phone:</strong> {{user.phone}}</li>
      <li><strong>Email:</strong> {{user.email}}</li>
    </ul>
  </li>
</ul>`,
  data() {
    return {
      showList: true,
      userLists: [
        {
          id: 1,
          name: 'Manuel Lorenz',
          phone: 012345678991,
          email: 'manuel@localhost.com',
        },
      ],
    };
  },
  methods: {
    getList(id) {
      this.showList = !this.showList;
    },
  },
});

app.mount('#app');
