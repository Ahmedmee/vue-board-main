<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">

      
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
  <table     class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
                Order ID
            </th>
              <th scope="col" class="py-3 px-6">
                Customer Name
              </th>
              <th scope="col" class="py-3 px-6">
                reciver Name              </th>
                <th scope="col" class="py-3 px-6">
                  order Name
               </th>
               <th scope="col" class="py-3 px-6">
                serial Number
             
              </th>

              <th scope="col" class="py-3 px-6">
                  Status
              </th>
             
          </tr>
      </thead>
      <tbody v-for="order in orders" :key="order">
          <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             
             
            <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
              <div class="pl-3">
                  <div class="text-base font-semibold" 
                 
                    >{{order.orderId}}</div>
              </div>  
          </th>

              
              <td class="py-4 px-6" >
                {{order.senderCustomerName}}
              </td>
              <td class="py-4 px-6">
                  <div class="flex items-center">
                    {{order.reciverCustomerName}}
                  </div>
              </td>
              <td class="py-4 px-6">
                <div class="flex items-center">
                  {{ order.orderItems.name }}
                </div>
            </td>
            <td class="py-4 px-6">
              <div class="flex items-center">
                {{order.serialNumber}}
              </div>
          </td>
          <td class="py-4 px-6">
            <div class="flex items-center">
              {{order.orderStauts}}
            </div>
        </td>
             
          </tr>
          

      </tbody>
  </table>
</div>

    </div>

    

  </div>

  
</template>

<script>
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
export default {
  name : 'The-table',
data () {

  return {

    orders : []
  }
} ,
created () {
     this.axios.get('http://mowafaqwali-001-site1.gtempurl.com/api/Orders')
      .then ((response =>{
        this.orders = response.data
      console.log(response.data);
      } ) )
      .catch((error) => {
        console.log(error);
     })
      
      
  }, 

}  
 
</script>
