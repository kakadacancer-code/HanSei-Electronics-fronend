<template>
  <div class="flex min-h-screen bg-gray-50 font-sans">
    

    <div class="flex-1 flex flex-col">

      <main class="p-8 space-y-8">
        <LeaveForm @add="addLeave" />
        <LeaveTable :leaves="leaves" @update="updateStatus" />
      </main>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'
import LeaveForm from '~/components/LeaveForm.vue'
import LeaveTable from '~/components/LeaveTable.vue'

const leaves = ref([])

const addLeave = (data) => {
  leaves.value.unshift({ id: Date.now(), ...data, status: 'Pending' })
}

const updateStatus = ({ id, status }) => {
  const item = leaves.value.find(l => l.id === id)
  if (item) item.status = status
}
</script>