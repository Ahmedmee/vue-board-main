<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Modal" />
         

<div class="flex flex-nowrap ">



<div class="m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div class="p-5">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Safa Othman</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> “I have used SudaShip 24 for many years and have always found them to have my best interest at heart.” .</p>
     
  </div>
</div>


<div class=" m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div class="p-5">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Mohmmed Albedri</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> “Thank you to you and your team for all your help on this transaction. You have made my life much easier than it is when working with most accountants. It’s been a pleasure!”. .</p>
    
  </div>
</div>



<div class=" m-2 max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
  <a href="#">
      <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
  </a>
  <div class="p-5">
      <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Ahmed Babiker</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> “SudaShip 24 It’s not just about numbers and sums, this is a firm that cares about you, the client. Great staff, knowledgeable and courteous that makes you feel valued.” .</p>
    
  </div>
</div>









</div>

</div>

</template>

<script setup lang="ts">
import { ref } from 'vue'
import Breadcrumb from '../partials/Breadcrumb.vue'

const open = ref(false)
</script>

<style>
.modal {
  transition: opacity 0.25s ease;
}
</style>
