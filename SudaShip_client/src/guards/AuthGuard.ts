import { computed, ref } from "vue";
import { useUserStore } from "../store/user";
import { getRefreshToken } from "../helpers/getRefreshToken";

export async function authGuard(to: any, from: any, next: any) {
  console.log("yes am here");

  const userStore = useUserStore();
  //check page is protected or not
  if (to.meta.needsAuth) {
    console.log("user in store are ", userStore.user);

    if (!userStore.user) {
      console.log("no no no ");

      next("/");
    } else {
      console.log("yes yes yes");

      const userRole = computed(() => userStore.userRole);
      // TODO
      // const token = computed(() => userStore.token);
      // const refreshToken = computed(() => userStore.refreshToken);
      // const refreshResponse = await getRefreshToken(
      //   token.value,
      //   refreshToken.value
      // );
      // if (refreshResponse) {
      //   userStore.saveUser({
      //     ...userStore.user,
      //     ...refreshResponse,
      //   });
      // }

      console.log("from data are ", from);

      next();

      // if (to.meta.needsRole && userRole.value !== to.meta.needsRole) {
      //   next(from);
      // }
      // } else {
      //   userStore.setUser(null);
      //   next("/");
      // }
    }
  }
  next();
}
