<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Forms" />
    
<form @submit.prevent="AddedEmployee">
  <div class="mb-6">
    <label  for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frist Name</label>
    <input v-model="userInfo.firstName" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
  </div>

  <div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secand Name</label>
    <input v-model="userInfo.lastName" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
  </div>
 

  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
    <input v-model="userInfo.email" type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
  </div>

  
  
  <div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phoneNumber</label>
    <input v-model="userInfo.phoneNumber" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
  </div>

  

<div class="mb-6">
  <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
  <input v-model="userInfo.roleName" type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
</div>



  <button  @click="sendPost()" type="submit" class=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

    
   

   
  </div>


</template>

<script> 
import axios from 'axios';
export default {
name: "EmployeeAdding",
data() {
      return {
     
        
  userInfo: {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    roleName: "",
    
  },
  departmentId: 2

}},
    methods: {
      sendPost() {

        axios
        .post("http://mowafaqwali-001-site1.gtempurl.com/api/CreateEmployee" , {userInfo: this.userInfo}  )
        .then(res => {
          console.log(res);
        })},
        AddedEmployee() {
      this.$swal.fire({
position: 'top-end',
icon: 'success',
title: 'Order Have Been Submited',
showConfirmButton: false,
timer: 15500
})}, 
    
    
    } }    // Adding an input method from SweetAlert 2 automatically binds an input form.
  
</script>
