<template>
  <header class="bg-white border-b px-6 py-3 flex items-center justify-between">
    
    <!-- Left -->
    <div class="flex items-center gap-3">
      <div class="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold">
        N
      </div>
      <h1 class="text-base font-semibold text-gray-700">
        HanSei Electronics
      </h1>
    </div>
    <div class="flex items-center gap-4">
      <div class="relative">
        <input
          v-model="search"
          @keyup.enter="handleSearch"
          type="text"
          placeholder="Search..."
          class="pl-9 pr-3 py-1.5 text-sm border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <svg
          @click="handleSearch"
          class="w-4 h-4 text-gray-400 absolute left-3 top-2 cursor-pointer"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-4.3-4.3M10 18a8 8 0 100-16 8 8 0 000 16z"/>
        </svg>
      </div>
      <button @click="goToNotifications" class="relative">
        <svg class="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M15 17h5l-1.4-1.4A2 2 0 0118 14.2V11a6 6 0 10-12 0v3.2c0 .5-.2 1-.6 1.4L4 17h5"/>
        </svg>
        <span class="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
      </button>
      <button @click="createSomething" class="w-7 h-7 flex items-center justify-center rounded-full border text-gray-600 hover:bg-gray-100">
        +
      </button>

      <div class="relative">
        <div
          @click="toggleMenu"
          class="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-medium cursor-pointer"
        >
          KD
        </div>
        <div
          v-if="openMenu"
          class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-md py-2"
        >
          <button
            v-if="!isLoggedIn"
            @click="login"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
          >
            Login
          </button>

          <button
            v-if="isLoggedIn"
            @click="logout"
            class="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
          >
            Logout
          </button>
        </div>
      </div>

    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const search = ref('')
const openMenu = ref(false)
const isLoggedIn = ref(false) 

const handleSearch = () => {
  if (!search.value) return
  console.log('Search:', search.value)

  router.push(`/search?q=${search.value}`)
}

const goToNotifications = () => {
  router.push('/notifications')
}

const createSomething = () => {
  router.push('/create')
}

const toggleMenu = () => {
  openMenu.value = !openMenu.value
}

const login = () => {
  isLoggedIn.value = true
  openMenu.value = false
  router.push('/login')
}

const logout = () => {
  isLoggedIn.value = false
  openMenu.value = false
  router.push('/login')
}
</script>