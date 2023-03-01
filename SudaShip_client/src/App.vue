<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import axios from "axios";
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getRedirectRoleRoute } from './helpers/routeHelper';
import router from './router';
import {useUserStore} from "./store/user";

const defaultLayout = 'default'

const { currentRoute } = useRouter()
const route = useRoute()

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

const userStore = useUserStore();

const loginUser = (token:string, refreshToken:string) => {
  userStore.setUser({token});
  axios.get("http://mowafaqwali-001-site1.gtempurl.com/api/User/GetUserInfo")
    .then((resp) => {
      const {data} = resp; 
      console.log(resp.data)
      // TODO:
      // userStore.setUser(data);
      // window.location.href = "/";     
    })
}
onMounted(() => {
//   console.log('on mounted');

//   const role  = route.query.role;
//   console.log('role is ' , role);
//   if (role == 'administrator') {
//     getRedirectRoleRoute('admin')
//   }else {
//     userStore.initUser();
// if (userStore.user?.value) {
//   const route = getRedirectRoleRoute(userStore.user.role);
//   router.push(route);
// } else {
  
// const urlParams = new  URLSearchParams(window.location.search);
// const token = urlParams.get('token')
// const refreshToken = urlParams.get('refreshToken')
//   if (token && refreshToken) {
//     loginUser(token as string, refreshToken as string);
//   }
// }
//   // const role = localStorage.getItem("role");
//   // userStore.setRole(role as string);
//   }
    

})
</script>
