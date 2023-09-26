<template>
  <section>
    <header><h1>Vue</h1></header>
    <new-friend @add-content="addContent"></new-friend>
    <friend-content
      v-for="friend in friends"
      :key="friend.id"
      :user-id="friend.id"
      :user-name="friend.name"
      :user-age="friend.age"
      :user-email="friend.userEmail"
      :is-favorite="friend.isFavorite"
      @toggle-favorite="toggleFavoriteSates"
      @delete="deleteContent"></friend-content>
  </section>
</template>
<script>
export default {
  data() {
    return {
      name: 'John',
      friends: [
        {
          id: 1,
          name: 'John Smith',
          age: 12,
          userEmail: 'JohnSmith@email.com',
          isFavorite: true,
        },
        {
          id: 2,
          name: 'Jack Love',
          age: 17,
          userEmail: 'JackLove@email.com',
          isFavorite: false,
        },
      ],
      newFriendData: [],
    };
  },
  methods: {
    toggleFavoriteSates(friendId) {
      const identifiedFriend = this.friends.find(
        (friend) => friend.id === friendId
      );
      identifiedFriend.isFavorite = !identifiedFriend.isFavorite;
    },
    addContent(friendName, friendAge, friendEmail) {
      const newFriendContent = {
        id: new Date().toISOString(),
        name: friendName,
        age: friendAge,
        email: friendEmail,
        isFavorite: false,
      };
      this.friends.push(newFriendContent);
    },
    deleteContent(friendId) {
      this.friends = this.friends.filter((friend) => friend.id !== friendId);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
  list-style: none;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
  border-radius: 0.6875rem;
  margin-left: 0.375rem;
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app .input-box {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
}
#app .input-box {
  font-weight: bold;
}
</style>
