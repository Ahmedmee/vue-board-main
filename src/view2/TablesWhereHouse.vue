<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">

      <div class="mt-6">

        

       
      </div>
    </div>

    

   
<br>
<br>

<h2 class="text-xl font-semibold leading-tight text-gray-700">Orders</h2>


<br>
<br>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  
                 
                  <th scope="col" class="py-3 px-6">
                      Order Id
                  </th>
                  <th scope="col" class="py-3 px-6">
                      status
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody   v-for="order in orders" :key="order">
              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 
                  
                  <td class="py-4 px-6">
                     {{ order.id }}                       
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2"></div> {{ order.status[0] }}
                      </div>
                  </td>
                  <td class="py-4 px-6">
                    <button   @click="Add()" type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Add To Wherehouse</button>

                    <button @click="DeleteOrder()"  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove </button>   
                   </td>
              </tr>
             
              
              
            
          </tbody>
      </table>
    </div>
  </div>

  
</template>
<script >
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()




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


export default {
name: "EmployeeList",
data() {
      return {

        orders : [

{   id : '54574' , 
    status: ['Shipped', 'Picked Up' , ' Deliverd ' , ' In WhereHouse '],
},
{   id : '45353' , 
    status: ['Shipped', 'Picked Up' , ' Deliverd ' , ' In WhereHouse '],
},
{   id : '52432430924834' , 
    status: ['Shipped', 'Picked Up' , ' Deliverd ' , ' In WhereHouse '],
},












]

      }
    },
    methods: {
        DeleteOrder() {
          this.$swal({
          title: 'Are you sure To Delete This Order ?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Delete it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Deleted', 'You successfully deleted this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
      }, 

       Add() {
          this.$swal({
          title: 'Are you sure To Add This Order ?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes Add  it!',
          cancelButtonText: 'No, Keep it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Add', 'You successfully Add this Order', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
      }, 
    
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
    
  




</script>

