<template>
  <div id="element-to-convert">
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />


    
<form class="flex items-center">   
  <label for="voice-search" class="sr-only">Search</label>
  <div class="relative w-full" >
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      </div>
      <input v-model="inputFild" type="text" id="voice-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Track Your Orders And See Thier Satus..." required>
   
  </div>
  <button @click="Check()"  data-modal-target="staticModal" data-modal-toggle="staticModal" class=" ml-3 block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-nUpdate focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
    Update
  </button>

  
</form>
<br>
<br>


  <div class="grid grid-cols-1 center gap-4  ">
  
  <br>





  <div v-if="isvisable" id="staticModal" data-modal-backdrop="static" tabindex="-1"  class=" fixed flex items-center justify-center   items-center h-screen z-50    overflow-y-auto md:inset-0  ">
    <div class="relative w-full h-full max-w-2xl md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Order </span> Tracking</h1>
        
              

                <button   @click="isvisable=false" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                </button>


                
            </div>
            <!-- Modal body -->
            <h3 class="ml-3  pb-6 pt-2 text-sm font-extrabold text-gray-900 dark:text-white md:text-xl sm:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Your Order is : </span> Shipped.</h3>
            <h3 class="ml-3  pb-6 pt-2 text-sm font-extrabold text-gray-900 dark:text-white md:text-xl sm:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Sender Name  is : </span> Mohmmed Ahmed Ali. </h3>
            <h3 class="ml-3  pb-6 pt-2 text-sm font-extrabold text-gray-900 dark:text-white md:text-xl sm:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">  Resciver Name is : </span> Othman Mohmmed Ali. </h3>
            <h3 class="ml-3  pb-6 pt-2 text-sm font-extrabold text-gray-900 dark:text-white md:text-xl sm:text-xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> Deliverd Time  at : </span> 22-2-2024.</h3>

            <!-- Modal footer -->
           
        </div>
    </div>
</div>
    <div >

    
</div>
  </div>
  </div>
</template>

<script >
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
import jsPdf from 'jspdf';
import html2pdf from "html2pdf.js";
export default {
name: "EmployeeList",
data() {
      return {
        isvisable: false,
        option1: false ,
        isHidden: false,
        chooseOption : "",
        inputFild : "",
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
        async Check() {
           if (this.inputFild==""){
            await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Please Enter Your Tracking Number!',
  confirmButtonColor: '#23C55F',
})

           } 
  else {
    this.isvisable = true ;
  }

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
