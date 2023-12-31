import { createApp } from 'vue';

import BaseCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import App from './App.vue';
import axios from 'axios';

const app = createApp(App);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);

// 添加axios到vue实例
app.config.globalProperties.$axios = axios;

app.mount('#app');
