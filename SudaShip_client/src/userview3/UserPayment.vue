<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Tables" />

    <section class="antialiased text-gray-600 min-h-screen p-4">
      <div class="h-full">
          <!-- Pay component -->
          <div>
              <!-- Card background -->
              <div class="relative px-4 sm:px-6 lg:px-8 max-w-lg mx-auto">
                  <img class="rounded-t shadow-lg" src="https://bankofkhartoum.com/sudan/arabic/wp-content/uploads/2014/10/about_us.jpg" width="460" height="180" alt="Pay background" />
              </div>
              <!-- Card body -->
              <div class="relative px-4 sm:px-6 lg:px-8 pb-8 max-w-lg mx-auto" x-data="{ card: true }">
                  <div class="bg-white px-8 pb-6 rounded-b shadow-lg">
  
                      <!-- Card header -->
                    
  
                      <!-- Toggle -->
                     
  
                      <!-- Card form -->
                      <div x-show="card">
                          <div class="space-y-4">
                              <!-- Card Number -->
                              <div>
                                  <label class="block text-sm font-medium mb-1" for="card-nr">Card Number <span class="text-red-500">*</span></label>
                                  <input v-model="CardNumber" id="card-nr" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="1234 1234 1234 1234" />
                              </div>
                              <!-- Expiry and cvc -->
                              <div class="flex space-x-4">
                                  <div class="flex-1">
                                      <label class="block text-sm font-medium mb-1" for="card-expiry">Expiry Date <span class="text-red-500">*</span></label>
                                      <input  v-model="ExpiryDate" id="card-expiry" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="MM/YY" />
                                  </div>
                                  <div class="flex-1">
                                      <label class="block text-sm font-medium mb-1" for="card-cvc">cvc <span class="text-red-500">*</span></label>
                                      <input v-model="cvc" id="card-cvc" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="cvc" />
                                  </div>
                              </div>
                              <!-- Name on Card -->
                              <div>
                                  <label class="block text-sm font-medium mb-1" for="card-name">Name on Card <span class="text-red-500">*</span></label>
                                  <input v-model="NameonCard" id="card-name" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="text" placeholder="Ahmed Daffallah " />
                              </div>
                              <!-- Email -->
                              <div>
                                  <label class="block text-sm font-medium mb-1" for="card-email">Email <span class="text-red-500">*</span></label>
                                  <input v-model="Email" id="card-email" class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 border-gray-200 hover:border-gray-300 focus:border-indigo-300 shadow-sm placeholder-gray-400 focus:ring-0 w-full" type="email" placeholder="Ahmed1999@gmail.com" />
                              </div>
                          </div>
                          <!-- Form footer -->
                          <div class="mt-6">
                              <div class="mb-4">
                                  <button @click="showAlert" class="font-medium text-sm inline-flex items-center justify-center px-3 py-2 border border-transparent rounded leading-5 shadow-sm transition duration-150 ease-in-out w-full bg-indigo-500 hover:bg-indigo-600 text-white focus:outline-none focus-visible:ring-2">Pay</button>
                              </div>
                          </div>
                      </div>
  
                      <!-- PayPal form -->
                      
  
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  <!-- More components -->
  
    
<br>
<br>


 
    

  </div>
</template>

<script >
 export default {
  methods: {
    data() {
        return {
          CardNumber  : "",
          ExpiryDate : "" ,
          cvc : "",
          NameonCard :"",
          Email :""
        }
    },
  async  showAlert() {
      // Use sweetalert2
      
      if(!this.CardNumber == null){
        await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'All Filds Are Mandatory!',
  confirmButtonColor: '#6366F1',
})
                  
    } else if(this.ExpiryDate== null ){
      await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'All Filds Are Mandatory!',
  confirmButtonColor: '#6366F1',
})
                  
    }

  else if(this.cvc== null ){
    await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'All Filds Are Mandatory!',
  confirmButtonColor: '#6366F1',
})
                  
    }
    else if(this.NameonCard== null ){
      await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'All Filds Are Mandatory!',
  confirmButtonColor: '#6366F1',
})
                  
    }
    else if(this.Email == null ){
      await this.$swal.fire({
  icon: 'error',
  title: 'Oops...',
  text: 'All Filds Are Mandatory!',
  confirmButtonColor: '#6366F1',
})
                  
    }
    
      
      
    },

  },
};
  
import { useTableData } from '../hooks/useTableData'
const { simpleTableData, paginatedTableData, wideTableData } = useTableData()
</script>
