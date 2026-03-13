<script setup>
import { reactive, watch } from "vue"

const emit = defineEmits(["submitRequest"])

const form = reactive({
  leaveType: "",
  startDate: "",
  endDate: "",
  totalDays: 0,
  reason: "",
  attachment: null
})

watch(() => [form.startDate, form.endDate], () => {
  if (form.startDate && form.endDate) {
    const start = new Date(form.startDate)
    const end = new Date(form.endDate)

    const diff = (end - start) / (1000 * 60 * 60 * 24) + 1
    form.totalDays = diff > 0 ? diff : 0
  }
})

const submit = () => {
  emit("submitRequest", { ...form })
}
</script>

<template>
  <div class="p-6 bg-gray-100 rounded-xl shadow space-y-4">

    <h2 class="text-xl font-semibold text-blue-600">Leave Request</h2>

    <select v-model="form.leaveType" class="w-full border p-2 rounded">
      <option value="">Select Leave Type</option>
      <option>Date Ounn Leave</option>
      <option>Sick Leave</option>
      <option>Drink Beer Leave</option>
      <option>C'lean Bay Leave</option>
      <option>Personal Leave</option>
      <option>Other</option>
    </select>

    <div class="grid grid-cols-2 gap-4">
      <input v-model="form.startDate" type="date" class="border p-2 rounded">
      <input v-model="form.endDate" type="date" class="border p-2 rounded">
    </div>

    <input
      type="number"
      :value="form.totalDays"
      readonly
      class="w-full border p-2 rounded bg-gray-100"
    >

    <textarea
      v-model="form.reason"
      placeholder="Reason for leave"
      class="w-full border p-2 rounded min-h-[100px]"
    ></textarea>

    <input type="file">

    <button
      @click="submit"
      class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700"
    >
      Submit Leave Request
    </button>

  </div>
</template>