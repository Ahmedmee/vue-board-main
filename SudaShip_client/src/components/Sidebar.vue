<template>
  <div class="flex">
    <!-- Backdrop -->
    <div
      :class="isOpen ? 'block' : 'hidden'"
     @click="isOpen = false"
      class="
        fixed
        inset-0
        z-20
        transition-opacity
        bg-black
        opacity-50
        lg:hidden
      "
    ></div>
    <!-- End Backdrop -->

    <div
      :class="isOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      class="
        fixed
        inset-y-0
        left-0
        z-30
        w-64
        overflow-y-auto
        transition
        duration-300
        transform
        bg-gray-900
        lg:translate-x-0 lg:static lg:inset-0
      "
    >
      <div class="flex items-center justify-center mt-8">
        <div class="flex items-center">
        
          <span class="mx-2 text-2xl font-semibold text-white">SudaShip</span>
        </div>
      </div>
     

      <nav class="mt-10" v-if="userRole == 'wherehouse' ">
        
        
          <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
             Contents
          </p>
          <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === '' ? activeClass : inactiveClass]"
          to="/ChartViewWhereHouse"
        >
          
  
          <span class="mx-4">Statistics </span>
        </router-link>
          <router-link

          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === '' ? activeClass : inactiveClass]"
          to="/TablesWhereHouse"
        >
          
  
          <span class="mx-4">Show Order List </span>
        </router-link>
        
  
         
      
  
  
          <router-link
            class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
            :class="[$route.name === '' ? activeClass : inactiveClass]"
            to="/writeReview"
          >
           
  
            <span class="mx-4">Reviews</span>
          </router-link>
          
        
      </nav>
      <nav class="mt-10" v-else-if="userRole == 'admin'">
        
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
           Contents
        </p>
        <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'Chart' ? activeClass : inactiveClass]"
        to="/charts"
      >
        

        <span class="mx-4">Statstics</span>
      </router-link>
      

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
          to="/tables"
        >
          

          <span class="mx-4">Orders</span>
        </router-link>

        <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'employee' ? activeClass : inactiveClass]"
        to="/Employee"
      >
       

        <span class="mx-4">Employees</span>
      </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Forms' ? activeClass : inactiveClass]"
          to="/forms"
        >
          

          <span class="mx-4">Add Employee</span>
        </router-link>


        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
          to="/modal"
        >
      

          <span class="mx-4">Reviews</span>
        </router-link>
        
      </nav>

      <nav class="mt-10" v-else-if="userRole == 'agent'">
        
        
        <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
           Contents
        </p>
        <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'ChartViewWhereHouse' ? activeClass : inactiveClass]"
        to="/ChartViewAgent"
      >
       

        <span class="mx-4">Statistics</span>
      </router-link>
    
    <router-link
    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
    :class="[$route.name === 'ChartViewWhereHouse' ? activeClass : inactiveClass]"
    to="/TablesAgent"
  >
   

    <span class="mx-4">Update Order</span>
  </router-link>

        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
          to="/TrackAgent"
        >
          

          <span class="mx-4">Track Order</span>
        </router-link>

    


        <router-link
          class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
          :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
          to="/writeReviewAgent"
        >
       

          <span class="mx-4">Write Review</span>
        </router-link>

      
        
      
    </nav>

    <nav class="mt-10" v-else-if="userRole == 'representive'">
        
        
      <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
         Contents
      </p>
      <router-link
      class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
      :class="[$route.name === 'ChartViewWhereHouse' ? activeClass : inactiveClass]"
      to="/ChartViewRepresentive"
    >
    

      <span class="mx-4">Statasitcs</span>
    </router-link>
    

      <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
        to="/TablesRepresentive"
      >
       

        <span class="mx-4">Update Orders</span>
      </router-link>

  


      <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
        to="/writeReviewrepresentive"
      >
    

        <span class="mx-4">Write Reviews</span>
      </router-link>
      <router-link
        class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
        :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
        to="/TrackRepresentive"
      >
       

        <span class="mx-4">Track order</span>
      </router-link>
      
    
  </nav>   
  <nav class="mt-10" v-else-if="userRole == 'user'">
        
        
    <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
       Contents
    </p>
    <router-link
    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
    :class="[$route.name === 'ChartViewWhereHouse' ? activeClass : inactiveClass]"
    to="/cargoDetils"
  >
  

    <span class="mx-4">Creat Order</span>
  </router-link>
  

    <router-link
      class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
      :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
      to="/Track"
    >
     

      <span class="mx-4">Track Order</span>
    </router-link>




    <router-link
      class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
      :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
      to="/TablesUser"
    >
      

      <span class="mx-4">show My Orders</span>
    </router-link>

    <router-link
    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
    :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
    to="/writeReview"
  >
    
    <span class="mx-4">Write Review</span>
  </router-link>
    
  
</nav>
<nav class="mt-10" v-else-if="userRole == 'saleman'">
        
        
  <p class="pl-4 my-2 text-xs font-semibold mb-4 text-gray-400">
     Contents
  </p>
  <router-link
  class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
  :class="[$route.name === 'ChartViewWhereHouse' ? activeClass : inactiveClass]"
  to="/assingeEmployee"
>
  

  <span class="mx-4"> Assgin Employee </span>
</router-link>


  <router-link
    class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
    :class="[$route.name === 'Tables' ? activeClass : inactiveClass]"
    to="/Track"
  >
    


    <span class="mx-4"> Track Order </span>
  </router-link>




  <router-link
  class="flex items-center px-6 py-2 mt-4 duration-200 border-l-4"
  :class="[$route.name === 'Modal' ? activeClass : inactiveClass]"
  to="/writeReview"
>
  

  <span class="mx-4">Write Review</span>
</router-link>
  

</nav>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useSidebar } from "../hooks/useSidebar";
import {useUserStore} from "../store/user";

const { isOpen } = useSidebar();
const activeClass = ref(
  "bg-gray-600 bg-opacity-25 text-gray-100 border-gray-100"
);
const inactiveClass = ref(
  "border-gray-900 text-gray-500 hover:bg-gray-600 hover:bg-opacity-25 hover:text-gray-100"
);

const userStore = useUserStore();

const userRole = computed(() => userStore.userRole);
</script>
 