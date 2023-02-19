import { createApp } from "vue";
import { createPinia } from 'pinia';

import VueApexCharts from "vue3-apexcharts";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import DashboardLayout from "./components/DashboardLayout.vue";
import EmptyLayout from "./components/EmptyLayout.vue";
import "./assets/tailwind.css";

import 'vue-search-select/dist/VueSearchSelect.css'


import App from "./App.vue";


import router from "./router";
import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'
import { useUserStore } from "./store/user";
import { getRedirectRoleRoute } from "./helpers/routeHelper";
import { authGuard } from "./guards/AuthGuard";
const pinia = createPinia();
const app = createApp(App);
app.use(VueSweetalert2);
app.component("default-layout", DashboardLayout);
app.component("empty-layout", EmptyLayout);

app.use(pinia)
.use(router)


.use(VueAxios, axios)
.mount("#app")
router.beforeEach(authGuard);