<template>
 
    <!-- Breadcrumb -->
    <Breadcrumb breadcrumb="Forms" />
   
<h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Request Order </span> From Company.</h1>
<br>




  <div class="border-solid border-2 border-emerald-200 mb-2 bg-white">


    <form class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>
<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>
<br>
      
    
      <button  v-if="btn" @click="showform()" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>
    <form   v-show="next1"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







  
          
         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

    <br>
    
    
   

      
      <button v-if="btn1" @click="showform1()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>
    <form   v-show="next2"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







  
         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

  
      <br>
      
      <button v-if="btn2"  @click="showform2()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>

    <form   v-show="next3"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







  
       
         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

    <br>
    
    
      
      <button v-if="btn3"  @click="showform3()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>

    <form   v-show="next4"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







  
         
         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

    <br>
    
   
      
      <button v-if="btn4" @click="showform4()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>


    <form   v-show="next5"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      





  





<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

  
      <br>
      
      <button v-if="btn5" @click="showform5()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>

    <form   v-show="next6"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







  
         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

   
      <br>
      
      <button v-if="btn6" @click="showform6()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>
    <form   v-show="next7"  class="p-5 bg-white"   >
      <h6 class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"> 
        
Shipment Details

      </span></h6>
    
    
      <div class="grid gap-6 mb-6 md:grid-cols-2">


        
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What Is The Item</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
      </div>

      <div>
        <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Brand Or Manufacturer</label>
        <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
    </div>

    <div>
      <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Model Is It</label>
      <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
  </div>

  <div>
    <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Shipment description</label>
    <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>

<div>
  <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Which Is It Made Of</label>
  <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required>
</div>



 
      










<div>
  <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Weight (kg)</label>
  <input  id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required>
</div>
          







         
        
      </div>
      <div>
        <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Choose Category</label>

        <select class="form-select w-full   m-3 h-10  rounded-lg" v-model="chooseOption">
          <option value="Option1" >Show Option1</option>
          <option value="Option2">Show Option2</option>
        </select>
         
         
        <div    v-if="chooseOption === 'Option1'"  >
        
          <select class="form-select  w-full   m-3 h-10 rounded-lg " >
            <option value="Option1"  >Show Option1</option>
            <option value="Option2">Show Option2</option>
          </select>
        </div>
        
        <div v-if="chooseOption === 'Option2'" >
        
        
          <select class="form-select  w-full m-3  h-10 rounded-lg"  >
            <option value="Option1"   >Show Option3</option>
            <option value="Option2">Show Option4</option>
          </select>
        </div>
        </div>




<label class="mb-4  text-gray-900 dark:text-white">Characteristics Of Order:</label>
<br>
<br>



<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="vue-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Heavy and oversized cargo</label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="react-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Moist </label>
        </div>
    </li>
    <br>
    <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="angular-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">
              Dangerous goods </label>
        </div>
    </li>
    <br>
    <li class="w-full dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input  id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
            <label for="laravel-checkbox-list" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"> The goods with an unpleasant smell </label>
        </div>
    </li>
</ul>

    <br>
 
      
      <button v-if="btn7" @click="showform7()"   class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Another Order</button>

    </form>
    


    




   
  

    </div>
 <form class="p-5 bg-white">
  <div>

      
    <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"  >Volume (cbm) and/or dims (cm)</label>
    <input type="text"  v-model="text"  placeholder="The number of cubic meters reserved by the order"   id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
</div>
    <div>
      <label for="">Shipment Data</label>
      <br>
      <br>
    <input
      v-model="deliveryDate"
      class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      type="date"
      placeholder="PO Delivery Date"
    /><br />
<pre class=" mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Delivery Date:<br>  {{ addDays(deliveryDate, 31) }}</span></pre>
  </div>
    
  <br>
    
  <label for="website-admin"  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price </label>

  <div class="flex">
  <br>
  <div>
    <pre class=" mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Total-Price Is: {{ count }} $</span></pre>
  
  </div>
  </div>
</form>
<br>




   <router-link to="UserPayment"  >
  <button type="submit"  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Order</button>
</router-link>

  




</template>

<script lang=""  >
import { ModelListSelect } from 'vue-search-select';

export default {
    data() {
      return {
        text: '',
        deliveryDate: "",
      knockDate: "",
        chooseOption : "" ,
        next: false ,
        next1 : false,
        next2 : false ,
        next3 : false ,
        next4 : false ,
        next5 : false ,
        next6 : false ,
        next7 : false ,
        btn: true ,
        btn1: true ,
        btn2: true ,
        btn3: true ,
        btn4: true ,
        btn5: true ,
        btn6: true ,
        btn7: true ,

      }
      
    },
    computed: {
    // Computed property named "count", depending on the
    // "text" variable
    count() {
      return this.text * 300;
    }},
    watch: {
    PO_DeliveryData() {
      let d = new Date(this.PO_DeliveryData);
      d.setDate(d.getMonth() + 30);
      this.knock_Date = d.getMonth() + 30
    }
  },
    methods : {
      toggle() {
      this.btn = false;
    }, 
    toggle1() {
      this.btn1 = false;
    },    
    toggle2() {
      this.btn2 = false;
    },
    toggle3() {
      this.btn3 = false;
    },
    toggle4() {
      this.btn4 = false;
    },
    toggle5() {
      this.btn5 = false;
    },
    toggle6() {
      this.btn6 = false;
    },
    toggle7() {
      this.btn7 = false;
    },

showform(){
this.next1 = true ;
this.toggle()
},

showform1(){
this.next2 = true
this.toggle1()
},
showform2(){
this.next3= true
this.toggle2()
},
showform3(){
this.next4 = true
this.toggle3()
},
showform4(){
this.next5 = true
this.toggle4()
},
showform5(){
this.next6 = true
this.toggle5()
},
showform6(){
this.next7 = true
this.toggle6()

},
showform7(){
this.next8 = true
},
addDays(dateString, days) {
  const date = (new Date(dateString)).getTime();
  const addTime = days * 24 * 60 * 60 * 1000;
  const result = new Date(date + addTime);
  return`${result.getMonth() + 1}/${result.getDate()}/${result.getFullYear()}`;
}


  
}
 
};


</script>
