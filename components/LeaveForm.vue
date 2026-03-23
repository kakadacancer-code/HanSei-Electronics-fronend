<template>
  <div class="bg-white p-6 rounded-2xl shadow-sm">
    <h2 class="text-lg font-semibold text-gray-700 mb-5">Request Leave</h2>

    <form @submit.prevent="submit" class="space-y-4">

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input v-model="form.name" placeholder="Employee Name" class="input" required />
        <select v-model="form.type" class="input" required>
          <option value="">Select Leave Type</option>
          <option>Annual</option>
          <option>Sick</option>
          <option>Unpaid</option>
        </select>

        <input v-model="form.start_date" type="date" class="input" required />
        <input v-model="form.end_date" type="date" class="input" required />
      </div>

      <textarea v-model="form.reason" placeholder="Reason" class="input" rows="3" required />

      <button type="submit" class="btn-primary w-full md:w-auto">Submit Request</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['add'])

const form = ref({ name: '', type: '', start_date: '', end_date: '', reason: '' })

const submit = () => {
  emit('add', { ...form.value })
  form.value = { name: '', type: '', start_date: '', end_date: '', reason: '' }
}
</script>

<style scoped>
.input {
  @apply border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-blue-300 focus:outline-none;
}

.btn-primary {
  @apply bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition;
}
</style>