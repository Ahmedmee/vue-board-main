import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null as any,
    role: "",
  }),
  getters: {
    userRole: (state) => state.user?.role,
    token: (state) => state.user?.token,
    refreshToken: (state) => state.user?.refreshToekn,
  },
  actions: {
    initUser() {
      const userData = localStorage.getItem("user");
      console.log("userData", userData);
      if (userData) {
        try {
          const user = JSON.parse(userData);
          this.user = user;
        } catch (e) {
          //
        }
      } else {
        console.log("user data are empty");
      }
    },
    setUser(user: any) {
      this.user = user;
      this.saveUser(user);
    },
    saveUser(user: any) {
      localStorage.setItem("user", JSON.stringify(user));
    },
    setRole(role: string) {
      this.role = role;
    },
    setAdminRole() {
      this.role = "admin";
    },
    setSalemanRole() {
      this.role = "saleman";
    },
    setRepresentiveRole() {
      this.role = "representive";
    },
    setAgentRole() {
      this.role = "agent";
    },
    setWherehouseRole() {
      this.role = "wherehouse";
    },
    setUserRole() {
      this.role = "user";
    },
  },
});
