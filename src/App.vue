<template>
  <component :is="layout">
    <router-view />
  </component>
</template>
<script lang="ts" setup>
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import {useUserStore} from "./store/user";

const defaultLayout = 'default'

const { currentRoute } = useRouter()

const layout = computed(
  () => `${currentRoute.value.meta.layout || defaultLayout}-layout`
)

const userStore = useUserStore();

onMounted(() => {
  const role = localStorage.getItem("role");
  userStore.setRole(role as string);
})
</script>
