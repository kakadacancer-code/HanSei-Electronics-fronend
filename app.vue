<script setup>
import AppSidebar from "~/components/AppSidebar.vue"
</script>

<template>
  <div class="flex">
    <AppSidebar />

    <main class="flex-1 p-6">
      <NuxtPage />
    </main>
  </div>

  <AppFooter />
</template>