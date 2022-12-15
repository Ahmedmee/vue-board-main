<template>
 
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Forms" />
   
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Request Order </span> From Company.</h1>
<br>
<br> 
<div class="border-solid border-2 border-emerald-200 bg-white">
<form  class="p-5 " >
  <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
    Shipper Details
     </span></h6>


  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipper First Name</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed" required>
  </div>
  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipper Last Name</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dafflalh" required>
</div>
      
      <div>
          <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipper Email</label>
          <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="khartoum " required>
      </div>  
      <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Shipper Phone number</label>
          <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+249" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required>
      </div>
     
    
  </div>

  
</form>
</div>
<br>

<div class="border-solid border-2 border-emerald-200 bg-white">
  <form  class="p-5 bg-white" >
    <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 

      Consignee Details
    </span></h6>
  
  
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignee First Name</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed" required>
    </div>
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignee Last Name</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dafflalh" required>
  </div>
        
        <div>
            <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Consignee Email</label>
            <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="khartoum " required>
        </div>  
        <div>
            <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Consignee Phone No</label>
            <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+249" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required>
        </div>
       
      
    </div>
  
    
  </form>
  </div>

<br>


  <div class="border-solid border-2 border-emerald-200 mb-2 bg-white">
    <form  class="p-5 bg-white" >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

         </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

     
      

    <div>
      <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume (cbm) and/or dims (cm)</label>
      <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
  </div>


  <div>
    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of packages</label>
    <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>


<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          








          <div>
              <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipper Email</label>
              <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="khartoum " required>
          </div>  
          <div>
            <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Volume (cbm) and/or dims (cm)</label>
            <input type="number" id="visitors" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
        </div>
         
        
      </div>




<label class="mb-4  text-gray-900 dark:text-white">Type Of cargo:</label>
<br>
<br>
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Electrical charges </label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Gaseous charges </label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Cotton Charges </label>
        </div>
    </li>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> Another </label>
        </div>
    </li>
</ul>

    <br>
    
      <label for="website-admin"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price </label>

      <div class="flex">
      <br>
        <span class="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600">
          $
        </span>
        <input type="text" id="website-admin" class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Amount" disabled>
      </div>
      <br>

    </form>
    
    </div>

      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>



</template>

<script setup lang="ts">

import { ref } from 'vue'
import Breadcrumb from '../partials/Breadcrumb.vue'

interface User {
  username: string
  email: string
  password: string
  confirm: string
}

const user = ref<User>({
  username: '',
  email: '',
  password: '',
  confirm: '',
})

const register = () => {
  const data = JSON.parse(JSON.stringify(user.value))
  console.log('Registered: ', data)
}

</script>
