<template>
  <TransitionGroup name="user-list" tag="ul">
    <li v-for="user of userList" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </TransitionGroup>
  <div>
    <input type="text" name="" id="" ref="inputUserData" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: ['Max', 'Lily', 'Jack', 'Aiden', 'zoey'],
      userData: null,
    };
  },
  methods: {
    addUser() {
      const userData = this.$refs.inputUserData.value;
      this.userList.push(userData);
      this.$refs.inputUserData.value = '';
    },
    removeUser(user) {
      return (this.userList = this.userList.filter((v) => v != user));
    },
  },
};
</script>
<style scoped>
ul {
  list-style: none;
  font-weight: bold;
  display: flex;
  gap: 0.375rem;
}
li {
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  border-radius: 0.6875rem;
}

div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.user-list-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.user-list-enter-active {
  transition: all 0.3s ease-out;
}
.user-list-leave-active {
  transition: all 0.3s ease-in;
  position: absolute;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.user-list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.user-list-move {
  transition: all 0.3s ease;
}
</style>
