<template>
  <!-- Breadcrumb -->
  <Breadcrumb breadcrumb="Forms" />
  <h1
    class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-3xl lg:text-3xl"
  >
    <span
      class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
      >Request Order
    </span>
    From Company.
  </h1>
  <br />
  <br />
  <form class="p-5" @submit.prevent="showAlert">
    <div class="p-5 border-solid border-2 border-emerald-200 bg-white">
      <h6
        class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          Shipper Details
        </span>
      </h6>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            for="last_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name</label
          >
          <input
            v-model="sender.firstName"
            type="text"
            name="sfn"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ahmed"
            required
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Last Name</label
          >
          <input
            v-model="sender.lastName"
            name="sln"
            type="text"
            placeholder="Daffalla"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email</label
          >
          <input
            v-model="sender.email"
            name="se"
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="khartoum "
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone number</label
          >
          <input
            v-model="sender.phone"
            name="sp"
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+249"
            required
          />
          <!-- pattern="[0-9]{4}[0-9]{3}[0-9]{3}" -->
        </div>
        <div>
          <label
            for="passport"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Passport ID</label
          >
          <input
            v-model="sender.passportId"
            name="spid"
            type="tel"
            id="passport"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="passport ID"
            required
          />
        </div>
      </div>

      <h6
        class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
      >
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          Consignee Details
        </span>
      </h6>

      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            First Name</label
          >
          <input
            v-model="receiver.firstName"
            name="rfn"
            type="text"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ahmed"
            required
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Last Name</label
          >
          <input
            v-model="receiver.lastName"
            name="rln"
            type="text"
            placeholder="Daffalla"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Email</label
          >
          <input
            v-model="receiver.email"
            name="re"
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="khartoum "
            required
          />
        </div>
        <div>
          <label
            for="phone"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Phone number</label
          >
          <input
            v-model="receiver.phone"
            name="rp"
            type="tel"
            id="phone"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="+249"
            required
          />
          <!-- pattern="[0-9]{4}[0-9]{3}[0-9]{3}" -->
        </div>
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Passport ID</label
          >
          <input
            v-model="receiver.passportId"
            name="rpid"
            type="tel"
            id="passport"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="passport ID"
            required
          />
        </div>
      </div>
    </div>
    <br />
    <br />

    <br />

    <div class="border-solid border-2 border-emerald-200 mb-2 bg-white">
      <div
        v-for="(order, index) of orders"
        :key="order.tt"
        class="p-5 bg-white"
      >
        <h6
          class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Shipment Details
          </span>
        </h6>

        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >What Is The Item</label
            >
            <input
              v-model="order.item"
              :name="'o-' + index + '-i'"
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Item"
              required
            />
          </div>

          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Brand Or Manufacturer</label
            >
            <input
              v-model="order.Manufacturer"
              :name="'o-' + index + '-mf'"
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Manufacturer"
              required
            />
          </div>

          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Which Model Is It</label
            >
            <input
              v-model="order.Model"
              :name="'o-' + index + '-modl'"
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Model"
              required
            />
          </div>

          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Shipment description</label
            >
            <input
              v-model="order.description"
              :name="'o-' + index + '-d'"
              type="text"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="description"
              required
            />
          </div>

          <div>
            <label
              for="last_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Which Is It Made Of</label
            >
            <input
              type="text"
              :name="'o-' + index + '-mad'"
              v-model="order.Made"
              id="last_name"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Made"
              required
            />
          </div>
          <div>
            <label
              for="visitors"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Weight (kg)</label
            >
            <input
              v-model="order.weight"
              :name="'o-' + index + '-w'"
              id="visitors"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
        <div>
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Quantity</label
          >

          <input
            v-model="order.quentity"
            type="number"
            min="1"
            :name="'o-' + index + '-sfn'"
            id="last_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Ahmed"
            required
          />
        </div>

        <!-- <label class="mb-4 text-gray-900 dark:text-white"
        >Characteristics Of Order:</label
      >
      <br />
      <br />

      <ul
        class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white"
      >
        <li
          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              id="vue-checkbox-list"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="vue-checkbox-list"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
              >Heavy and oversized cargo</label
            >
          </div>
        </li>
        <br />
        <li
          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              id="react-checkbox-list"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="react-checkbox-list"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Moist
            </label>
          </div>
        </li>
        <br />
        <li
          class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600"
        >
          <div class="flex items-center pl-3">
            <input
              id="angular-checkbox-list"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="angular-checkbox-list"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Dangerous goods
            </label>
          </div>
        </li>
        <br />
        <li class="w-full dark:border-gray-600">
          <div class="flex items-center pl-3">
            <input
              id="laravel-checkbox-list"
              type="checkbox"
              value=""
              class="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
            />
            <label
              for="laravel-checkbox-list"
              class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              The goods with an unpleasant smell
            </label>
          </div>
        </li>
      </ul>
      <br /> -->

        <button
          v-if="index == orders.length - 1"
          @click="addOrder()"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-3"
        >
          Another Order
        </button>
      </div>

      <div class="p-5 bg-white">
        <h6
          class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Source Location
          </span>
        </h6>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Country</label
            >
            <input
              v-model="sourceLocation.country"
              name="slc"
              type="text"
              placeholder="Sudan"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >State</label
            >
            <input
              v-model="sourceLocation.state"
              name="sc"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Khartoum"
              required
            />
            <!-- pattern="[0-9]{4}[0-9]{3}[0-9]{3}" -->
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City</label
            >
            <input
              v-model="sourceLocation.city"
              name="slcc"
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              for="passport"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Street</label
            >
            <input
              v-model="sourceLocation.street"
              name="sstreet"
              type="tel"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street"
              required
            />
          </div>
        </div>
        <map-location-selector
          class="w-full h-60"
          :latitude="sourceLocation.latitude"
          :longitude="sourceLocation.longitude"
          @locationUpdated="
            (latlng) => {
              sourceLocation.latitude = latlng.lat;
              sourceLocation.longitude = latlng.lng;
            }
          "
        >
        </map-location-selector>

        <h6
          class="my-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
        >
          <span
            class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
          >
            Destination Location
          </span>
        </h6>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Country</label
            >
            <input
              v-model="destinationLocation.country"
              name="slc"
              type="text"
              placeholder="Sudan"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >State</label
            >
            <input
              v-model="destinationLocation.state"
              name="sc"
              type="text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Khartoum"
              required
            />
            <!-- pattern="[0-9]{4}[0-9]{3}[0-9]{3}" -->
          </div>
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              City</label
            >
            <input
              v-model="destinationLocation.city"
              name="slcc"
              type="text"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="City"
              required
            />
          </div>
          <div>
            <label
              for="passport"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Street</label
            >
            <input
              v-model="destinationLocation.street"
              name="sstreet"
              type="tel"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Street"
              required
            />
          </div>
        </div>
        <map-location-selector
          class="w-full h-60"
          :latitude="destinationLocation.latitude"
          :longitude="destinationLocation.longitude"
          @locationUpdated="
            (latlng) => {
              destinationLocation.latitude = latlng.lat;
              sourceLocation.longitude = latlng.lng;
            }
          "
        >
        </map-location-selector>
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Notes</label
          >
          <textarea
            v-model="notes"
            name="sln"
            placeholder="Notes..."
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          ></textarea>
        </div>

        <div class="mt-2">
          <label
            for="visitors"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Volume (cbm) and/or dims (cm)</label
          >
          <input
            type="text"
            v-model="text"
            placeholder="The number of cubic meters reserved by the order"
            id="visitors"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mt-2">
          <label for="">Shipment Date</label>
          <br />
          <br />
          <input
            v-model="deliveryDate"
            class="rounded-none rounded-r-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            type="date"
            placeholder="PO Delivery Date"
          /><br />
          <pre
            class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
          ><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Delivery Date:<br>  {{ addDays(deliveryDate, 31) }}</span></pre>
        </div>

        <br />

        <label
          for="website-admin"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Price
        </label>

        <div class="flex">
          <br />
          <div>
            <pre
              class="mb-4 text-1xl font-extrabold text-gray-900 dark:text-white md:text-1xl lg:text-1xl"
            ><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Total-Price Is: {{ count }} $</span></pre>
          </div>
        </div>
        <!-- @click="pay()" -->
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Order
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import MapLocationSelector from "vue-google-maps-location-selector";

export default {
  components: {
    MapLocationSelector,
  },
  data() {
    return {
      sender: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        passportId: "",
      },
      receiver: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        passportId: "",
      },
      orders: [],
      deliveryDate: "",
      text: "",
      knockDate: "",
      chooseOption: "",
      sourceLocation: {
        latitude: "22.3844911",
        longitude: "107.3692131",
        street: "",
        city: "",
        state: "",
        country: "China",
      },
      destinationLocation: {
        latitude: "15.5015451",
        longitude: "32.5725965",
        street: "",
        city: "",
        state: "",
        country: "Sudan",
      },
    };
  },
  computed: {
    // Computed property named "count", depending on the
    // "text" variable
    count() {
      return this.text * 300;
    },
  },
  watch: {
    PO_DeliveryData() {
      let d = new Date(this.PO_DeliveryData);
      d.setDate(d.getMonth() + 30);
      this.knock_Date = d.getMonth() + 30;
    },
  },
  mounted() {
    this.addOrder();
  },
  methods: {
    addOrder() {
      this.orders.push({
        tt: new Date().getTime(),
        item: "",
        description: "",
        Manufacturer: "",
        Model: "",
        Made: "",
        weight: "",
        quentity: 1,
      });
    },
    pay() {
      // Use sweetalert2
      if (
        this.Made == "" &&
        this.Model == "" &&
        this.Manufacturer == "" &&
        this.item == "" &&
        this.chooseOption == ""
      ) {
        this.$swal("All Filds Are mandatory");
      } else {
        this.$router.push("/UserPayment");
      }
    },
    toggle() {
      this.btn = false;
    },
    addDays(dateString, days) {
      const date = new Date(dateString).getTime();
      const addTime = days * 24 * 60 * 60 * 1000;
      const result = new Date(date + addTime);
      return `${
        result.getMonth() + 1
      }/${result.getDate()}/${result.getFullYear()}`;
    },
    showAlert() {
      // Use sweetalert2
      // const keysNotEmpty = (obj, keys) => {
      //   for (let i = 0; i < keys.length; i++) {
      //     if (!obj[keys[i]] || obj[keys[i]].length == 0) {
      //       return false;
      //     }
      //   }
      //   return true;
      // }
      // const validateInfo = (obj) => {
      //   return keysNotEmpty(obj, [
      //     "firstName",
      //     "lastName",
      //     "phone",
      //     "email",
      //     "passportId",
      //   ]);
      // }
      // if (
      //   !validateInfo(this.sender)  || !validateInfo(this.receiver)
      // ) {
      //   this.$swal("All Filds Are mandatory");
      // } else {
      // }
      // this.$router.push("/cargoDetils");
      const payload = {
        sender: this.sender,
        reciever: this.receiver,
        sourceLocation: this.sourceLocation,
        destinationLocation: this.destinationLocation,
        customerShippingDate: this.deliveryDate,
        notes: this.notes,
        items: this.orders.map((o) => ({
          name: o.item,
          description: o.description,
          brand: o.Manufacturer,
          material: o.Made,
          quentity: o.quentity,
          wieght: o.weight,
          // categoryId: o.cate
        })),
      };

      this.createOrder(payload);
    },

    createOrder(payload) {
      this.axios
        .post(
          "http://mowafaqwali-001-site1.gtempurl.com/api/Orders/createOrder",
          payload
        )
        .then(() => {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your order have been created.",
            showConfirmButton: false,
            timer: 15500,
          });
          this.$router.push("/TablesUser");
        });
    },
  },
};
</script>

<style>
</style>