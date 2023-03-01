
<template>
  
  <div class="flex  justify-center px-6 items-center ">
    <div class="my-10 grid-rows-1 place-items-center  items-center" > <h1 class="text-5xl font-bold text-center" > Thanks for creating an </h1> 
                       <h1 class="text-5xl leading-normal font-bold text-center"> account with mailjet </h1> 
    
                       <br>
                       <div class="grid  place-items-center"><img class="text-center" src="https://www.technipages.com/wp-content/uploads/2021/11/gmail-signature-image-disappears-600x312.png"></div>

                       
                       <br>
                       <p class="text-center font-semibold" >You  are almost finished.</p>
                       <p class="text-center font-semibold"> We have sent account activation email  to you at mufaq12344@gmail.com</p>
                       <p class="text-center font-semibold" >Head over to your inboxand click on the " Activate my account" button to validate your email address </p>
                       <br>
                       <div class="grid  place-items-center"> <button type="button" class=" focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 algin-center ">I did not receive the email</button></div>
                      <br>
                       <p class="text-center font-semibold" >I have already clicked the botton <router-link to="/" class=" text-green-600"> take me to my account</router-link> .</p>
                      <br>
                       <div class="grid  place-items-center"> <router-link to="/" class=" text-green-600"> Sign out</router-link></div>
                       <br>
                       <hr>
                       <br>
                       <div class="grid grid-cols-6 gap-4">
                        <div class="col-start-1 col-end-3 ...">@ 2023 Mailjet SAS All rights reserved</div>
                        <div class="col-end-7 col-span-2 ...">Privacy Policy - Sending policy - Terms Of Use </div>
                      </div>
                      </div>


  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import {useUserStore} from "../store/user";


const router = useRouter();
const email = ref("johndoe@mail.com");
const password = ref("@#!@#asdf1231!_!@#");
const userStore = useUserStore();





</script>
