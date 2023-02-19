<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">

      <div class="mt-6">
        <h2 class="text-xl font-semibold leading-tight text-gray-700">Orders</h2>

        

       
      </div>
    </div>
<br>
<br>
    

    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  
                  <th scope="col" class="py-3 px-6">
                     User Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Order ID
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Status
                  </th>
                  
              </tr>
          </thead>
          <tbody v-for="order in orders" :key="order">
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 
                  <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                      <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jese image">
                      <div class="pl-3">
                          <div class="text-base font-semibold">Ahmed Dafflalh</div>
                          <div class="font-normal text-gray-500">neil.sims@flowbite.com</div>
                      </div>  
                  </th>
                  <td class="py-4 px-6">
                      454385430509
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2"></div> Shipped 
                      </div>
                  </td>
                
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
    
    
                  <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jese image">
                    <div class="pl-3">
                          <div class="text-base font-semibold">Mohmed Ahmed</div>
                          <div class="font-normal text-gray-500">bonnie@flowbite.com</div>
                      </div>
                  </th>
                  <td class="py-4 px-6">
                      43095495840
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full mr-2"></div> Picked Up
                      </div>
                  </td>
 
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 
                  <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jese image">
                    <div class="pl-3">
                          <div class="text-base font-semibold">Yassir Mohmmed</div>
                          <div class="font-normal text-gray-500">jese@flowbite.com</div>
                      </div>
                  </th>
                  <td class="py-4 px-6">
                       323435874398543
                    </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2"></div> Picked Up 
                      </div>
                  </td>
                 
              </tr>
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
    
                  <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    
                    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jese image">
                    <div class="pl-3">
                          <div class="text-base font-semibold">Mohmmed Albedri</div>
                          <div class="font-normal text-gray-500">thomes@flowbite.com</div>
                      </div>
                  </th>
                  <td class="py-4 px-6">
                      4843985457437493
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2">  </div>Shipped 
                      </div>
                  </td>
              
              </tr>
              <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                
                  <th scope="row" class="flex items-center py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <img class="w-10 h-10 rounded-full" src="https://images.unsplash.com/photo-1592085198739-ffcad7f36b54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" alt="Jese image">
                    <div class="pl-3">
                          <div class="text-base font-semibold">Mohmmed Adam  </div>
                          <div class="font-normal text-gray-500">leslie@flowbite.com</div>
                      </div>
                  </th>
                  <td class="py-4 px-6">
                      3293243284032
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2"></div> Shipped
                      </div>
                  </td>
                 
              </tr>
          </tbody>
      </table>
    </div>



<br>
<br>



<br>
<br>
    
  </div>

  
</template>

<script >
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()

export default {
  name : 'The-table',
data () {

  return {

    orders : [

            {   id : '54574' , 
                Ordername: 'Refrigerator',
                status: ['Shipped', 'Picked Up' , ' Deliverd ' , ' In WhereHouse '],
                
            }           
           


        ]
  }
}
//created () {
     // this.axios.get('https://v1.nocodeapi.com/ahmed000/ow/yEsnpsheKBYtzvrI/byCityName?q=khartoum')
      //.then ((response =>{
        //this.orders = response.data
        //console.log(response.data);
    //  } ) )
      //.catch((error) => {
        //console.log(error);
     // })
      
      
  //}, 

}
</script>
