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
      <table v-if="!loading" class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                  
                  <th scope="col" class="py-3 px-6">
                      Name
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Email
                  </th>
                  <th scope="col" class="py-3 px-6">
                      phone
                  </th>
                  <th scope="col" class="py-3 px-6">
                      Action
                  </th>
              </tr>
          </thead>
          <tbody v-for="Employe in Employees" :key="Employe">
              <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                 
 
                  <td  v-text=" Employe.username" class="py-4 px-6">
                    
                  </td>
                  <td  v-text=" Employe.email" class="py-4 px-6">
                    
                  </td>
                  <td  v-text=" Employe.phone" class="py-4 px-6">
                    
                  </td>
                  

                  <td class="py-4 px-6">
                    <button @click="isvisable=true"  data-modal-target="staticModal" data-modal-toggle="staticModal" class="text-white m-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-nUpdate focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" type="button">
                      Review
                    </button>
                  <button @click="DeleteEmployee()  "  type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Employee</button>   
                   </td>
              </tr>
            
            
             
             
          </tbody>
      </table>

      <div v-else>
        <loading-spinner />
      </div>
    </div>
   
  </div>
  <div v-if="isvisable" id="staticModal" data-modal-backdrop="static" tabindex="-1"  class=" fixed flex items-center justify-center   items-center h-screen z-50    overflow-y-auto md:inset-0 ">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Update Order
                </h3>
                <button   @click="isvisable=false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>
            </div>
            <!-- Modal body -->
            <form class="w-full   items-center justify-center">
              <div  class="relative mb-2 items-center" data-te-input-wrapper-init>
              
                <div class="flex justify-center">
                  <div class="relative mb-3 xl:w-96" data-te-input-wrapper-init>
                    <textarea v-model="area"
                      class="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Your Review"></textarea>
                   
                  </div>
                </div> 
              
          
                
          
              </div>
              
          
             
          
              
              
            </form>
            <!-- Modal footer -->
            <button  @click="alert()" type="button" class="text-white m-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-nUpdate focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Review</button>

           
        </div>
    </div>
</div>
  
</template>
<script >
import axios from 'axios';
import { useTableData } from '../hooks/useTableData'
import LoadingSpinner from '@/components/LoadingSpinner.vue';
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()

export default {
  components: { LoadingSpinner },
name: "EmployeeList",
data() {
      return {
        isvisable: false,
        area: "",
        Employees : [],
        loading: false,
    }
       

    },

  check(){
if (this.area == ''){
 alert("hi")
} 


    },
    mounted() {
      this.loading = true;
        axios.get('http://mowafaqwali-001-site1.gtempurl.com/api/User').then(response => {
          console.log(response.data)
          this.Employees=response.data
        }).finally(()=> {
          this.loading = false;
        })
          
        },
        
    methods: {
 alert(){
   if(this.area == ''){
    alert('Write Review')
   }
   else{
    alert( " Review is sended") 
   
 }
 },

    
        
      removeRow: function(index) {
            this.Employees.splice(index, 1);
        },
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
            this.removeRow()
            
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
              this.sendPost()
  
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        

       }
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
    
  




</script>

