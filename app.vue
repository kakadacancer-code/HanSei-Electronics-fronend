
<script setup>
import Sidebar from "~/components/Sidebar.vue"
import Header from "~/components/Header.vue"
</script>

<template>
  <Header />
  <div class="flex">
    <Sidebar />

    <main class="flex-1 p-6">
      <NuxtPage />
    </main>
  </div>

  <AppFooter />
</template>

<template>
  <div>
    <AppAddEdit/>
    <AppEmployees />
    <Nuxtpage />
  </div>
</template>
