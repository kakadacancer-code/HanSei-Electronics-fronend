<script setup>
defineProps({
  requests: Array
})

const emit = defineEmits(["viewRequest"])

const badgeColor = (status) => {
  if (status === "Pending") return "bg-yellow-200 text-yellow-800"
  if (status === "Approved") return "bg-green-200 text-green-800"
  if (status === "Rejected") return "bg-red-200 text-red-800"
}
</script>

<template>
  <div class="p-6 bg-white rounded-xl shadow">

    <h2 class="text-xl font-semibold mb-4 text-blue-600">Leave Request History</h2>

    <table class="w-full border-collapse">

      <thead>
        <tr class="border-b text-left">
          <th class="p-2">ID</th>
          <th class="p-2">Leave Type</th>
          <th class="p-2">Start</th>
          <th class="p-2">End</th>
          <th class="p-2">Days</th>
          <th class="p-2">Status</th>
          <th class="p-2">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="req in requests"
          :key="req.id"
          class="border-b"
        >
          <td class="p-2">{{ req.id }}</td>
          <td class="p-2">{{ req.leaveType }}</td>
          <td class="p-2">{{ req.startDate }}</td>
          <td class="p-2">{{ req.endDate }}</td>
          <td class="p-2">{{ req.totalDays }}</td>

          <td class="p-2">
            <span
              class="px-2 py-1 rounded text-sm"
              :class="badgeColor(req.status)"
            >
              {{ req.status }}
            </span>
          </td>

          <td class="p-2">
            <button
              @click="$emit('viewRequest', req)"
              class="text-blue-600 underline"
            >
              View
            </button>
          </td>
        </tr>
      </tbody>

    </table>

  </div>
</template>