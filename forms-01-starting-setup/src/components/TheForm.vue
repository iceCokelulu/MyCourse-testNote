<template>
  <form @submit.prevent="getUserName">
    <div
      class="form-control"
      :class="{ invalid: userNameValidity === 'invalid' }"
    >
      <label for="user-name">Your Name</label>
      <input
        id="user-name"
        name="user-name"
        type="text"
        v-model.trim="userName"
        @blur="getState"
      />
      <p v-if="userNameValidity === 'invalid'">请输入正确格式!</p>
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input id="age" name="age" type="number" v-model="userAge" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us?</label>
      <select id="referrer" name="referrer" v-model="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in?</h2>
      <div>
        <input
          id="interest-news"
          name="interest"
          value="news"
          type="checkbox"
          v-model="checkArr"
        />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input
          id="interest-tutorials"
          name="interest"
          value="tutorials"
          type="checkbox"
          v-model="checkArr"
        />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input
          id="interest-nothing"
          name="interest"
          value="nothing"
          type="checkbox"
          v-model="checkArr"
        />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn?</h2>
      <div>
        <input
          id="how-video"
          name="how"
          type="radio"
          value="videoCourses"
          v-model="radioRes"
        />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input
          id="how-blogs"
          name="how"
          type="radio"
          value="blogs"
          v-model="radioRes"
        />
        <label for="how-blogs">Blogs</label>
      </div>
      <div>
        <input
          id="how-other"
          name="how"
          type="radio"
          value="other"
          v-model="radioRes"
        />
        <label for="how-other">Other</label>
      </div>
    </div>
    <div class="form-control">
      <input
        id="confirm-terms"
        name="confirm-terms"
        value="nothing"
        type="checkbox"
        v-model="checkBol"
      />
      <label for="interest-nothing">Your option?</label>
    </div>
    <div class="form-control">
      <rating-control v-model="rating"></rating-control>
    </div>
    <div>
      <button>Save Data</button>
    </div>
    <div>
      <input
        type="text"
        :value="textContent"
        @input="textContent = $event.target.value"
      />
      <p>{{ textContent }}</p>
    </div>
  </form>
</template>
<script>
import RatingControl from './RatingControl.vue';
export default {
  components: {
    RatingControl,
  },
  data() {
    return {
      userName: '',
      userAge: null,
      referrer: 'baidu',
      checkArr: [],
      radioRes: null,
      checkBol: false,
      state: false,
      userNameValidity: null,
      rating: null,
      textContent: null,
    };
  },
  methods: {
    getUserName() {
      console.log(this.rating);
      this.rating = null;
    },
    getState() {
      if (this.userName === '') {
        this.userNameValidity = 'invalid';
      } else {
        this.userNameValidity = 'valid';
      }
    },
  },
};
</script>
<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
}
.form-control.invalid input {
  border-color: #ff0000;
}
.form-control.invalid label {
  color: #ff0000;
}

h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}

select {
  width: auto;
}

input[type='checkbox'],
input[type='radio'] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
  font-weight: normal;
}

button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
