<script setup>
import Sidebar from "~/components/Sidebar.vue"
import Header from "~/components/Header.vue"
</script>

<template>
  <div class="h-screen flex flex-col">
    <Header />
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1 p-6 bg-gray-50 overflow-auto">
        <NuxtPage />
      </main>
    </div>
  </div>
</template>