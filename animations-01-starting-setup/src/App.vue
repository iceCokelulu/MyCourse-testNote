<template>
  <div class="container">
    <UserList></UserList>
  </div>
  <div class="container">
    <div class="block" :class="{ animation: isAnimation }"></div>
    <button @click="setAnimation">Animate</button>
  </div>
  <div class="container">
    <!-- <p :class="{ isShow: paraIsShow }">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto,
      placeat.
    </p> -->
    <transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @enter-cancelled="onEnterCancelled"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
      @after-leave="onAfterLeave"
      @leave-cancelled="onLeaveCancelled"
    >
      <p v-if="paraIsShow">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto,
        inventore.
      </p>
    </transition>
    <button @click="setParaChange">showParagraph</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <transition name="user" mode="out-in">
      <button @click="showUser" v-if="userIsVisible">show User</button>
      <button @click="hiddenUser" v-else>hide User</button>
    </transition>
  </div>
</template>

<script>
import UserList from './components/UserList.vue';
export default {
  components: {
    UserList,
  },
  data() {
    return {
      dialogIsVisible: false,
      isAnimation: false,
      paraIsShow: false,
      userIsVisible: true,
      leaveInterval: null,
      enterInterval: null,
    };
  },
  methods: {
    onBeforeEnter(el) {
      el.style.opacity = 0;
    },
    onEnter(el, done) {
      let round = 0;
      this.enterInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    onAfterEnter(el) {
      console.log('onAfterEnter');
      console.log(el);
    },
    onEnterCancelled() {
      clearInterval(this.enterInterval);
    },
    onBeforeLeave(el) {
      el.style.opacity = 1;
    },
    onLeave(el, done) {
      let round = 1;
      this.leaveInterval = setInterval(() => {
        el.style.opacity = 1 - round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    onLeaveCancelled() {
      clearInterval(this.leaveInterval);
    },
    showUser() {
      this.userIsVisible = false;
    },
    hiddenUser() {
      this.userIsVisible = true;
    },
    setParaChange() {
      this.paraIsShow = !this.paraIsShow;
    },
    setAnimation() {
      this.isAnimation = !this.isAnimation;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition: all ease-in 0.3s; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animation {
  /* transform: translateX(-150px); */
  animation: side-fade ease-in 0.3s forwards;
}
@keyframes side-fade {
  0% {
    transform: translateX(-50px) scale(0.9);
  }
  25% {
    transform: translateX(-75px) scale(0.8);
  }
  50% {
    transform: translateX(-100px) scale(0.7);
  }

  75% {
    transform: translateX(-125px) scale(0.6);
  }
  100% {
    transform: translateX(-150px) scale(0.5);
  }
}

.isShow {
  display: none;
}

/* .v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}

.v-enter-active,
.v-leave-active {
  transition: ease-out 0.3s;
}
.v-enter-to,
.v-leave-from {
  opacity: 1;
  transform: translateY(0);
} */

.user-enter-from,
.user-leave-to {
  opacity: 0;
}
.user-enter-active {
  transition: opacity 0.3s ease-out;
}
.user-leave-active {
  transition: opacity 0.3s ease-in;
}
.user-enter-to,
.user-leave-from {
  opacity: 1;
}
</style>
