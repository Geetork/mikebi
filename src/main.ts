import { createApp } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { createPinia } from 'pinia';
import './style.css';
import App from './App.vue';
import TaskPage from './pages/TaskPage.vue';

// Define routes using the RouteRecordRaw type
const routes: RouteRecordRaw[] = [{
    path: '/',
    component: TaskPage,
}];

// Create the router instance with history mode and defined routes
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

// Create the Pinia store instance
const pinia = createPinia()

// Create the Vue app instance
const app = createApp(App);

// Use the router and Pinia in the app instance
app.use(router);
app.use(pinia);

// Mount the app to the specified element
app.mount('#app');
