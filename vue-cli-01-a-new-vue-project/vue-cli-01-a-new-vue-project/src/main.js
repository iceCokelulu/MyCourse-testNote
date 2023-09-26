import { createApp } from 'vue';

import App from './App.vue';
import friendContent from './component/FriendContent.vue';
import newFriend from './component/NewFriend.vue';

const app = createApp(App);

app.component('friend-content', friendContent);
app.component('new-friend', newFriend);

app.mount('#app');
