import { computed, ref } from "vue";
import {useUserStore} from "../store/user";
import {getRefreshToken} from "../helpers/getRefreshToken";


export async function authGuard(to:any, from:any, next:any) {
  const userStore = useUserStore();
  //check page is protected or not
  if (to.meta.needsAuth) {
    if (!userStore.user) {
      next("/");
    } else {
      const userRole = computed(() => userStore.userRole);
      // const token = computed(() => userStore.token);
      // const refreshToken = computed(() => userStore.refreshToken);
      // const refreshResponse = await getRefreshToken(token.value, refreshToken.value);
      // if (refreshResponse) {
      //   userStore.saveUser({
      //     ...userStore.user,
      //     ...refreshResponse,
      //   });
        if (to.meta.needsRole && userRole.value !== to.meta.needsRole) {
          next(from);
        }
      // } else {
      //   userStore.setUser(null);
      //   next("/");
      // }
    }

  }
  next();
}