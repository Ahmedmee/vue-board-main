<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getRedirectRoleRoute } from './helpers/routeHelper';
import router from './router';
import {useUserStore} from "./store/user";

const defaultLayout = 'default'

const { currentRoute } = useRouter()

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

const userStore = useUserStore();

onMounted(() => {
  
const userStore = useUserStore();
console.log("Will do it");
userStore.initUser();
if (userStore.user) {
  const route = getRedirectRoleRoute(userStore.user.role);
  router.push(route);
}
  // const role = localStorage.getItem("role");
  // userStore.setRole(role as string);
})
</script>
