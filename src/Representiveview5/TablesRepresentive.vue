<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">

      
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              
              <th scope="col" class="py-3 px-6">
                  Order ID
              </th>
             
              <th scope="col" class="py-3 px-6">
                  Status
              </th>
              <th scope="col" class="py-3 px-6">
                  Action
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             
              <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="pl-3">
                      <div class="text-base font-semibold">34309845094308</div>
                  </div>  
              </th>
              
              <td class="py-4 px-6">
                  <div class="flex items-center">
                       In Where House
                  </div>
              </td>
              <td class="py-2 px-2">
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Update Status To Shipped</button>
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              
            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              <div class="pl-3">
                  <div class="text-base font-semibold">4543095858043</div>
              </div>  
          </th>

             
              
              <td class="py-4 px-6">
                  <div class="flex items-center">
                    In Where House
                  </div>
              </td>
              <td class="py-2 px-2">
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Update Status To Shipped</button>
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             
            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              <div class="pl-3">
                  <div class="text-base font-semibold">45439058435094</div>
              </div>  
          </th>
             
              <td class="py-4 px-6">
                  <div class="flex items-center">
                    In Where House
                  </div>
              </td>
              <td class="py-2 px-2">
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  >Update Status To Shipped</button>
              </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              

            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              <div class="pl-3">
                  <div class="text-base font-semibold">3483480248023840</div>
              </div>  
          </th>
             
           <td class="py-4 px-6">
                  <div class="flex items-center">
                    In Where House

                  </div>
              </td>
              <td class="py-2 px-2">
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  >Update Status To Shipped</button>
              </td>
          </tr>
          <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
            
            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              <div class="pl-3">
                  <div class="text-base font-semibold">3483274032740</div>
              </div>  
          </th>
   
              <td class="py-4 px-6">
                  <div class="flex items-center">
                     In WhereHouse
                  </div>
              </td>
              <td class="py-2 px-2">
                <button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  >Update Status To Shipped</button>
                
              </td>
          </tr>
      </tbody>
  </table>
</div>

    </div>

    

  </div>

  
</template>

<script setup lang="ts">
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
</script>
