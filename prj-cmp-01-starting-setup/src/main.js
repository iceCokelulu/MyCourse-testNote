import { createApp } from 'vue';
import App from './App.vue';

import BaseCard from './component/UI/BaseCard.vue';
import BaseButton from './component/UI/BaseButton.vue';
import BaseDialog from './component/UI/BaseDialog.vue';

const app = createApp(App);

app.component('BaseCard', BaseCard);
app.component('BaseButton', BaseButton);
app.component('BaseDialog', BaseDialog);
app.mount('#app');
