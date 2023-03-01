<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Modal" />
         

<div class="flex flex-nowrap " >



<div class="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"  v-for=" review in Reviews " :key="review">
  <a href="#">
      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div class="p-5">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{review.name}}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> {{review.Review}}</p>
     
  </div>
</div>














</div>

</div>

</template>

<script  >
import { ref } from 'vue'
import Breadcrumb from '../partials/Breadcrumb.vue'

const open = ref(false)
export default {
name: "EmployeeList",
data() {
      return {
        
        
        Reviews : [

          {
            name : 'Ahmeed Daffalla',
            Review : ' I have used SudaShip 24 for many years and have always found them to have my best interest at heart.” '
          },
          {
            name : 'Mohmmed',
            Review : ' I have used SudaShip 24 for many years and have always found them to have my best interest at heart.” '
          },
          {
            name : 'Mohmmed',
            Review : ' I have used SudaShip 24 for many years and have always found them to have my best interest at heart.” '
          }






        ],
        
    }
       

    },

           // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
