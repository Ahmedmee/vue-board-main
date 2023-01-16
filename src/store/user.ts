import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      role: ""
    }),
    getters: {
      userRole: (state) => state.role,
    },
    actions: {
      setRole(role:string) {
        this.role = role;
      },
      setAdmin(){
        this.role = 'admin';
      },
      setSaleman(){
        this.role = 'saleman';
      },
      setRepresentive(){
        this.role = 'representive';
      },
      setAgent(){
        this.role = 'agent';
      },
      setWherehouse(){
        this.role = 'wherehouse';
      },
      setUser(){
        this.role = 'user';
      }
    }
})