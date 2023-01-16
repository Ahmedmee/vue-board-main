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
  <button   @click="exportToPDF" type="button" class=" ml-3 text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Track</button>

</form>
<br>
<br>


  <div class="grid grid-cols-1 center gap-4  ">
  
  <br>
    <div >

      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d122355.78111683972!2d32.802648000000005!3d16.595717!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x168e8fde9837cabf%3A0x191f55de7e67db40!2sKhartoum%2C%20Sudan!5e0!3m2!1sen!2sus!4v1672052916212!5m2!1sen!2sus" width="1000" height="1000" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>  </div >
    

  </div>
</template>

<script >
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
import jsPdf from 'jspdf';
import html2pdf from "html2pdf.js";
export default {
name: "TrckOrder",
data() {
      return {
        inputFild : "" ,
       
      }
    },
    methods: {

      exportToPDF(){
        html2pdf(document.getElementById('element-to-convert'));
      },
      Downoladpdf (){
       var pdf = new jsPdf
       pdf.text('' , 10 ,10)
       pdf.save('company.pdf')
      },
      async Track() {

    if (this.inputFild=="") {
      await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'Please Enter Your Tracking Number!',
  confirmButtonColor: '#23C55F',
})

      
    } else {
      await this.$swal.fire( 'Your Order Status Is Shipped')

    }

        

       }
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
       
}
</script>
