<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    <div class="mt-8">
      
      
      <h2 class="text-xl font-semibold leading-tight text-gray-700">Assgin Employees To Orders</h2>
      
      
      <br>
      <br>
      
      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    
                    <th scope="col" class="py-3 px-6">
                        Order ID
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Order Name
                    </th>
                    <th scope="col" class="py-3 px-6">
                        Status
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Representitive
                    </th>
                    <th scope="col" class="py-3 px-6">
                      Assign
                    </th>
                </tr>
            </thead>
            <tbody v-for="order in orders" :key="order" >
               
               
              
              
                <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                  
                  <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="pl-3">
                        <div class="text-base font-semibold">{{order.id}}</div>
                    </div>  
                </th>
                    <td class="py-4 px-6">
                      {{ order.Ordername }}

                    </td>
                    <td class="py-4 px-6">
                        <div class="flex items-center">
                          {{ order.status[1] }}
                        </div>
                    </td>
                    <td class="py-2 px-2">
                      <select name="Representitive" id="cars" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <option value="volvo">{{order.Representitive[0]}}</option>
                        <option value="saab">{{order.Representitive[1]}}</option>
                        <option value="mercedes">{{order.Representitive[2]}}</option>
                      </select>                      
                    </td>

                    <td><button  type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"  >Assign</button></td>

                </tr>
            </tbody>
        </table>
      </div>
      
          </div>

    

   
<br>
<br>

    
  </div>

  
</template>
<script >
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()




export default {
name: "EmployeeList",
data() {
      return {



        orders : [

{   id : '54574' , 
    Ordername: 'Refrigerator',
    status: ['Shipped', 'orderd' , ' Deliverd ' , ' In WhereHouse '],
    Representitive :[  'mohmmed Ahmed' , 'yassier mohmmed' , 'mohmmed adam' ]
    

},
{   id : '54574' , 
    Ordername: 'Refrigerator',
    status: ['Shipped', 'orderd' , ' Deliverd ' , ' In WhereHouse '],
    Representitive :[  'mohmmed Ahmed' , 'yassier mohmmed' , 'mohmmed adam' ]
    
}        



]


      }
    },
    methods: {
        DeleteEmployee() {
          this.$swal({
          title: 'Are you sure To Delete This Employee ?',
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
      async ReviewEmployee() {

  const { value: text } = await this.$swal.fire({
  input: 'textarea',
  inputLabel: 'Message',
  inputPlaceholder: 'Type your message here...',
  inputAttributes: {
    'aria-label': 'Type your message here'
  },
  showCancelButton: true
})
if(text.value !== null) {
              this.$swal('Done', 'This Review Has Been Submited To Employee', 'success')

  
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        

       }
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
    
  




</script>

