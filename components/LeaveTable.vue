<template>
  <div class="bg-white p-6 rounded-2xl shadow-sm">
    <h2 class="text-lg font-semibold text-gray-700 mb-5">Leave Requests</h2>

    <table class="w-full text-left text-gray-600">
      <thead>
        <tr class="border-b border-gray-200">
          <th class="p-3">Employee</th>
          <th class="p-3">Type</th>
          <th class="p-3">Period</th>
          <th class="p-3">Status</th>
          <th class="p-3 text-right">Action</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="leave in leaves" :key="leave.id" class="border-b border-gray-100">
          <td class="p-3 font-medium">{{ leave.name }}</td>
          <td class="p-3">{{ leave.type }}</td>
          <td class="p-3">{{ leave.start_date }} → {{ leave.end_date }}</td>
          <td class="p-3">
            <span :class="statusBadge(leave.status)">{{ leave.status }}</span>
          </td>
          <td class="p-3 text-right space-x-2">
            <button @click="update(leave.id, 'Approved')" class="btn-success">Approve</button>
            <button @click="update(leave.id, 'Rejected')" class="btn-danger">Reject</button>
          </td>
        </tr>

        <tr v-if="leaves.length === 0">
          <td colspan="5" class="text-center py-5 text-gray-400">No leave requests</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
const props = defineProps({ leaves: Array })
const emit = defineEmits(['update'])

const update = (id, status) => emit('update', { id, status })

const statusBadge = (status) => {
  if (status === 'Approved') return 'badge-green'
  if (status === 'Rejected') return 'badge-red'
  return 'badge-yellow'
}
</script>

<style scoped>
.badge-green { @apply bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium; }
.badge-red { @apply bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-medium; }
.badge-yellow { @apply bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium; }

.btn-success { @apply bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600 transition; }
.btn-danger { @apply bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition; }
</style>