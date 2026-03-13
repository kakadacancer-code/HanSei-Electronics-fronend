<script setup>
</script>

<template>
  <aside class="w-64 min-h-screen bg-blue-600 text-white border-r shadow-sm">

    <div class="p-6 border-b">
      <h1 class="text-xl font-bold text-white">
        HanSei System
      </h1>
    </div>

    
    <nav class="p-4 space-y-2">

    
      <NuxtLink
        to="/dashboard"
        class="block px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Dashboard
      </NuxtLink>

      <NuxtLink
        to="/employees"
        class="block px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Employees
      </NuxtLink>
      
        <NuxtLink
        to="/attendance"
        class="block px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Attendance
      </NuxtLink>

       <NuxtLink
        to="/roster"
        class="block px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Roster
      </NuxtLink>

      <NuxtLink
        to="/leave-request"
        class="block px-4 py-2 rounded-lg hover:bg-blue-500"
      >
        Leave Requests
      </NuxtLink>

    </nav>

  </aside>
</template>