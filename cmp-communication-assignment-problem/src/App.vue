<template>
  <div class="container">
    <user-data @save-data="addUserData"></user-data>
    <active-user
      v-for="user in userData"
      :key="user.id"
      :user-id="user.id"
      :user-name="user.name"
      :user-age="user.age"
      @delete="deleteData"></active-user>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
    };
  },
  methods: {
    addUserData(userName, userAge) {
      const newData = {
        id: new Date().toISOString(),
        name: userName,
        age: userAge,
      };
      this.userData.push(newData);
    },
    deleteData(userId) {
      this.userData = this.userData.filter((user) => user.id !== userId);
    },
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-family: 'Roboto', sans-serif;
}

.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.container .input-box {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  align-items: center;
}

.container .input-box input {
  padding: 0.375rem 0.625rem;
}

.container .input-box label {
  font-weight: 700;
}

.box-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.25rem;
  background-color: #f1f3f5;
  padding: 1rem 2rem;
  box-shadow: 0 0 0.3125rem rgba(0, 0, 0, 0.208);
}
.box-container button {
  width: 100%;
}
#app .icon {
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  top: 0%;
  right: 0%;
  cursor: pointer;
}
</style>
