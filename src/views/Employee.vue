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

<h2 class="text-xl font-semibold leading-tight text-gray-700">Employees</h2>


<br>
<br>
    <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
      <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  
                  <th scope="col" class="py-3 px-6">
                      Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Position
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Salary
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody v-for="Employe in Employees" :key="Employe">
              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 
                  <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                      <div class="pl-3">
                          <div class="text-base font-semibold">{{Employe.Name}}</div>
                          <div class="font-normal text-gray-500">{{Employe.email}}</div>
                      </div>  
                  </th>
                  <td class="py-4 px-6">
                      {{ Employe.status[1] }}
                  </td>
                  <td class="py-4 px-6">
                      <div class="flex items-center">
                          <div class="h-2.5 w-2.5 rounded-full  mr-2"></div> {{Employe.salary[1] }}
                      </div>
                  </td>
                  <td class="py-4 px-6">
                    <button   @click="ReviewEmployee()" type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Review Employee</button>

                    <button @click="DeleteEmployee()"  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Employee</button>   
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




export default {
name: "EmployeeList",
data() {
      return {
        Employees : [

            {   Name : 'Ahmed' , 
                email: 'Ahmed1999@gmail.com',
                status: [ 'sales Man' , ' Shipping Agent ' , 'WhereHouse Manager '],
                salary : [ '200$' , '500$' , '1000$']
            },

            {   Name : 'Mohmmed' , 
                email: 'Mohmmed1999@gmail.com',
                status: [ 'sales Man' , ' Shipping Agent ' , 'WhereHouse Manager '],
                salary : [ '200$' , '1000$' , '1000$']
            },

            {   Name : 'Yassir' , 
                email: 'Mohmmed1999@gmail.com',
                status: [ 'sales Man' , ' Shipping Agent ' , 'WhereHouse Manager '],
                salary : [ '200$' , '1000$' , '1000$']
            },




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

