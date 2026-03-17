<script setup>
defineProps({
  request: Object,
  employee: Object
})

const emit = defineEmits(["close"])
</script>

<template>
  <div class="fixed inset-0 bg-black/40 flex items-center justify-center">

    <div class="bg-gray-100 p-6 rounded-xl shadow w-[500px] space-y-3">

      <h2 class="text-xl font-bold">Request Detail</h2>

      <p><strong>Employee:</strong> {{ employee.name }}</p>
      <p><strong>Department:</strong> {{ employee.department }}</p>

      <hr>

      <p><strong>Leave Type:</strong> {{ request.leaveType }}</p>
      <p><strong>Start:</strong> {{ request.startDate }}</p>
      <p><strong>End:</strong> {{ request.endDate }}</p>
      <p><strong>Total Days:</strong> {{ request.totalDays }}</p>

      <p><strong>Reason:</strong></p>
      <p class="text-gray-600">{{ request.reason }}</p>

      <p><strong>Status:</strong> {{ request.status }}</p>

      <button
        @click="emit('close')"
        class="mt-4 bg-gray-800 text-white px-4 py-2 rounded"
      >
        Close
      </button>

    </div>

  </div>
</template>