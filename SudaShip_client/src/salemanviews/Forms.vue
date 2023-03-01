<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Forms" />
    
<form @submit.prevent="AddedEmployee">
  <div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Frist Name</label>
    <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
  </div>

  <div class="mb-6">
    <label for="text" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Secand Name</label>
    <input type="text" id="text" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder=" " required>
  </div>

  <div class="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required>
  </div>
  

<label for="countries" class=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
<select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option selected>Select Employee Role</option>
  <option value="US">Shipping Agent</option>
  <option value="CA">Coustmer Borker </option>
  <option value="FR">WherHouse Manageer</option>
  <option value="DE">Shipping representive</option>
</select>

  <button type="submit" class=" mt-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>

    
   

   
  </div>


</template>

<script > 
export default {
name: "EmployeeAdding",
data() {
      return {

      }
    },
    methods: {
        AddedEmployee() {
          this.$swal({
          title: 'Are you sure To Add This Employee To Company ?',
          text: 'You can\'t revert your action',
          type: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, Add it!',
          cancelButtonText: 'No, Cancel it!',
          showCloseButton: true,
          showLoaderOnConfirm: true
        }).then((result) => {
          if(result.value) {
            this.$swal('Added', 'You successfully Added this file', 'success')
          } else {
            this.$swal('Cancelled', 'Your file is still intact', 'info')
          }
        })
      }, 
   
    
    }          // Adding an input method from SweetAlert 2 automatically binds an input form.
  }
</script>
