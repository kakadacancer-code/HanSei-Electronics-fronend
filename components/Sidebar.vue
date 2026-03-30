<template>
  <aside class="w-64 bg-white shadow-md p-6">
    <h2 class="text-2xl font-bold mb-8 text-gray-800">HR Dashboard</h2>

    <nav class="space-y-4">
      <NuxtLink to="/" class="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
        Dashboard
      </NuxtLink>
      <NuxtLink to="/employees" class="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
        Employees
      </NuxtLink>
      <NuxtLink to="/attendance" class="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
        Attendance
      </NuxtLink>
      <NuxtLink to="/roster" class="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
        Roster
      </NuxtLink>
      <NuxtLink to="/leave-requests" class="block px-4 py-2 rounded-lg bg-blue-50 text-blue-600 font-medium hover:bg-blue-100 transition">
        Leave Requests
      </NuxtLink>
    </nav>
  </aside>
</template>