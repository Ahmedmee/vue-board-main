<template>
 
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Forms" />
   
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Request Order </span> From Company.</h1>
<br>
<br> 
<div class="border-solid border-2 border-emerald-200 bg-white">
<form  class="p-5 "  @submit.prevent="showAlert" >
  <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
    Shipper Details
     </span></h6>


  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
      <input  type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed" required>
  </div>

<div>
  <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
  <input  type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="khartoum " required>
</div> 
      <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input v-model="track3" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+249" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required>
      </div>
     
    
  </div>

  <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 

    Consignee Details
  </span></h6>


  <div class="grid gap-6 mb-6 md:grid-cols-2">
    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Name</label>
      <input  type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed" required>
  </div>

<div>
  <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
  <input  type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ahmed1999@gmail.com " required>
</div> 
      <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input v-model="track3" type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+249" pattern="[0-9]{4}[0-9]{3}[0-9]{3}" required>
      </div>
     
    
  </div>
  <router-link to=""  >
    <button type="submit" @click="showAlert()"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Next</button>
  </router-link>
</form>



</div>
<br>
<br>


  


   
  


  










</template>

<script lang="" >

export default {
  methods: {
    data() {
        return {
          
            track : "" ,
            track1 : "" ,
            track2 : "" ,
            track3 : "" ,
            track4 : "" ,
            track5 : "" ,
            track6 : "" ,
            track7 : "" ,
            track8 : "" ,
            track9 : "" ,
            number11 : ""  


        }
    },
    
    
    showAlert() {
      // Use sweetalert2
      if(this.track== null && this.track1 ==null && this.track2 == null && this.track3 == null
         
        && this.track6 == null  ){
      this.$swal('All Filds Are mandatory');
                  
    } 
      
      else {
        this.$router.push('/cargoDetils')
      }
    },

  },
};


</script>
