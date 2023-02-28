import { createApp } from 'vue'
import { createStore } from 'vuex'

import axios from 'axios'
import { defineStore } from 'pinia'
// Create a new store instance.
const store = defineStore('orders', {
  state: () => {
    return {
      orders : [],
      
      loading: false,
    }
  },
  getters: {
   
  },
  actions :{
     
  


  }
})
