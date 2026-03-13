<script setup>
defineProps({
  employee: Object
})
</script>

<template>
  <div class="p-6 bg-white rounded-xl shadow">
    <h2 class="text-xl font-semibold mb-4 text-blue-600">Employee Information</h2>

    <div class="grid grid-cols-2 gap-4">

      <div>
        <p class="text-gray-500 text-sm">Employee ID</p>
        <p class="font-bold">{{ employee.id }}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Full Name</p>
        <p class="font-bold">{{ employee.name }}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Department</p>
        <p class="font-bold">{{ employee.department }}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Position</p>
        <p class="font-bold">{{ employee.position }}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Email</p>
        <p class="font-bold">{{ employee.email }}</p>
      </div>

      <div>
        <p class="text-gray-500 text-sm">Phone</p>
        <p class="font-bold">{{ employee.phone }}</p>
      </div>

    </div>
  </div>
</template>