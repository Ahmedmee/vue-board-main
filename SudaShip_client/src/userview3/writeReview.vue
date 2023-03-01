<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">


      
<form>
  <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">Your Review</label>
          <textarea  v-model="inputFild"  id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800  dark:text-white dark:placeholder-gray-400" placeholder=" Post Reviwe..." required></textarea>
      </div>
      <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
        <button   @click="Review()" type="button" class=" ml-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Submit</button>

        
      </div>
  </div>
</form>
<p class="ml-auto text-xs text-gray-500 dark:text-gray-400">Remember, contributions to this topic should follow our <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">Community Guidelines</a>.</p>




    </div>

    

  </div>

  
</template>

<script >

import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
import axios from 'axios';
export default {
name: "ReviewSubmit",

data() {
      return {
        inputFild : "" ,
      }
    },
    methods: {
 //     sendPost() {

// axios
// .post("http://mowafaqwali-001-site1.gtempurl.com/api/CreateEmployee" , this.inputFild  )
// .then(res => {
 // console.log(res);
// })},
       
      async Review() {

    if (this.inputFild=="") {
      await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Please Enter Your Review!',
  confirmButtonColor: '#23C55F',
})

      
    } else {
      await this.$swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your Review Has Been Submited',
  showConfirmButton: false,
  timer: 15500
})

    }

        

       }
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
</script>
