import { computed, ref } from "vue";
import {useUserStore} from "../store/user";


export function authGuard(to:any, from:any, next:any) {
  const userStore = useUserStore();
  //check page is protected or not
  if (to.meta.needsAuth) {
    if (!userStore.user) {
      next("/");
    } else {

      const userRole = computed(() => userStore.userRole);
  
      if (userRole.value !== to.meta.needsRole) {
        next(from);
      }
    }

  }
  next();
}