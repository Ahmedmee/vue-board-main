import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
    state: () => ({
      role: ""
    }),
    getters: {
      userRole: (state) => state.role,
    },
    actions: {
      setAdmin(){
        this.role = 'admin';
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