import { createApp } from 'vue';
import ElementPlus from 'element-plus';

import App from './App.vue';
import { store } from './store';
import { router } from './router';

import 'uno.css';
import '@/assets/styles/index.scss';
// If you want to use ElMessage, import it.
import 'element-plus/theme-chalk/src/message.scss';

async function main() {
    const app = createApp(App);

    // load plugins
    app.use(store);
    app.use(router);
    app.use(ElementPlus);

    app.mount('#app');
}

main();
