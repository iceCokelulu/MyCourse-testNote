<template>
  <base-dialog v-if="alterState" title="您输入的信息为空" @close="isInputEmpty">
    <template #default>
      <p>对不起，你输入的信息无效！</p>
      <p>请你重新输入！</p>
    </template>
    <template #actions>
      <base-button @click="isInputEmpty">确认</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form action="#" @submit.prevent="submitData">
      <div>
        <label for="title">名称</label>
        <input id="title" name="title" type="text" v-model="menuTitle" />
      </div>
      <div>
        <label for="description">内容描述</label>
        <textarea
          id="description"
          name="description"
          type="text"
          rows="3"
          v-model="menuDes"
        ></textarea>
      </div>
      <div>
        <label for="link">URL</label>
        <input id="link" name="link" type="text" v-model="menuLink" />
      </div>
      <div>
        <base-button type="submit">添加菜单</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['putMenuResource'],
  data() {
    return {
      alterState: false,
      menuTitle: '',
      menuDes: '',
      menuLink: '',
    };
  },
  methods: {
    submitData() {
      if (
        this.menuTitle.trim() === '' ||
        this.menuLink.trim() === '' ||
        this.menuDes.trim() === ''
      ) {
        this.alterState = true;
        return;
      }
      this.putMenuResource(this.menuTitle, this.menuDes, this.menuLink);
    },
    isInputEmpty() {
      this.alterState = false;
    },
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
div {
  margin-bottom: 0.75rem;
}

.alert-box {
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, 50%);
}
</style>
