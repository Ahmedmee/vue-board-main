<template>
  <div class=" grid grid-cols gap-4">
    <!-- Breadcrumb -->
    

   








    <div class="  grid-cols-9  p-4 bg-white border border-gray-200 rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">

      <div id="preview" class="flex flex-col items-center pb-10">
        <img v-if="item.imageUrl" :src="item.imageUrl" class="w-24 h-24 mb-3 rounded-full shadow-lg mt-3"  alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">Mohmed Adam </h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Sale man</span>
        <div class="flex mt-2 space-x-3 md:mt-6">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">
            <input type="file"  class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" accept="image/*" @change="onChange" />
          </label>
        </div>

       
    </div>

    
    <div >
      <img  />
    </div>
      <form  >

        <div class="grid gap-6 mb-6 md:grid-cols-2">
            <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
                <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed" required>
            </div>
            <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
                <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dafflalh" required>
            </div>
            <div>
                <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="khartoum " required>
            </div>  
            <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+249" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required>
            </div>
           
          
        </div>
        <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmead.me@gmal.com" required>
        </div> 
        <div class="mb-6">
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
            <input type="password" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div> 
        <div class="mb-6">
            <label for="confirm_password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input type="password" id="confirm_password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="•••••••••" required>
        </div> 
        
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button>
    </form>
    
    </div>



         







<div class="flex flex-nowrap ">



  



















</div>

</div>

</template>

<script >

import { ref } from 'vue'
import Breadcrumb from '../partials/Breadcrumb.vue'

const open = ref(false)
export default {
  name: 'imageUpload',
  data() {
    return {
      item:{
          //...
          image : null,
          imageUrl: null
      }
    }
  },
  methods: {
    onChange(e) {
      const file = e.target.files[0]
      this.image = file
      this.item.imageUrl = URL.createObjectURL(file)
      
    }
  }
} 
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
