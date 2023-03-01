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
      <tbody v-for="order in orders" :key="order">
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
             
              <th scope="row" class="flex items-center py-4 px-6 text-gray-900 whitespace-nowrap dark:text-white">
                  <div class="pl-3">
                      <div class="text-base font-semibold">{{order.id}}</div>
                  </div>  
              </th>
              
              <td class="py-4 px-6">
                  <div class="flex items-center">
                       {{ order.status[3] }}
                  </div>
              </td>
              <td class="py-2 px-2">

<!-- Modal toggle -->
<button @click="isvisable=true"  data-modal-target="staticModal" data-modal-toggle="staticModal" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-nUpdate focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Update
</button>

<!-- Main modal -->
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
              
               
                <div>
                  
                    <select   class="form-select w-64   m-3 h-10  rounded-lg ">
                      <option value="1">Update Order To </option>
                      <option value="2">Shipped</option>
                      <option value="3">In WhereHouse</option>
                      <option value="4">Ordered</option>
                      <option value="5">Reviewed</option>
                      <option value="6">Deliverd</option>
                    </select>
                
                </div>
          
                
          
              </div>
              
          
              <div>
          
                <select class="form-select w-64    m-3 h-10  rounded-lg" v-model="chooseOption">
                  <option value="Option1" >Shipping Agent </option>
                  <option value="Option2">Shipping Repersentive</option>
                  <option value="Option3">WhereHose Manager</option>
                  <option value="Option4">SaleMan</option>
          
                </select>
                 
                 
                <div    v-if="chooseOption === 'Option1'"  >
                
                  <select class="form-select w-64   m-3 h-10 rounded-lg " >
                    <option value="Option1"  >Ahmed Ali Mohmmed</option>
                    <option value="Option2">Izzeden Fath Alrhman</option>
                    <option value="Option2">Mohmmed Alberdri Ahmed</option>
          
                  </select>
                </div>
                
                <div    v-if="chooseOption === 'Option2'"  >
                
                  <select class="form-select w-64   m-3 h-10 rounded-lg " >
                    <option value="Option1"  >Suliman Hassan Yassier </option>
                    <option value="Option2">Hammed Ali Hassan </option>
                    <option value="Option2">Othan Ali Ahmed Hussam </option>
          
                  </select>
                </div>
                <div v-if="chooseOption === 'Option3'" >
                
                
                  <select class="form-select  w-64  m-3  h-10 rounded-lg"  >
                    <option value="Option1"   >Ali Ahmed Mohmed</option>
                    <option value="Option2">Faris Mohmmed Ahmed</option>
                  </select>
                </div>
          
                <div    v-if="chooseOption === 'Option4'"  >
                
                  <select class="form-select   w-64  m-3 h-10 rounded-lg " >
                    <option value="Option1"  >Salm Ahmed Mohmed</option>
                  </select>
                </div>
                </div>
          
              
              
              <button  @click="alert()"  type="button" class="text-white m-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-nUpdate focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" >Update</button>
            </form>
            <!-- Modal footer -->
           
        </div>
    </div>
</div>

              </td>
          </tr>
          
      </tbody>
  </table>
</div>

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
        isvisable: false,
        option1: false ,
        isHidden: false,
        chooseOption : "",
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
      methods : {
      
         alert(){
          alert('order is Updated')
         },
        emitCancel(){
        this.$emit('cancel');
        },
        emitConfirm(){
          this.$emit('confirm')

        },
        first(){
  this.option1 = true
      }       // Adding an input method from SweetAlert 2 automatically binds an input form.
       
 }
}
</script>
