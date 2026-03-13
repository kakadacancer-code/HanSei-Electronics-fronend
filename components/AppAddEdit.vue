<template>
  <div class="mb-6 p-4 bg-gray-50 rounded shadow">
    <h2 class="text-xl font-semibold mb-4">
      {{ employee?.id ? 'Edit Employee' : 'Add Employee' }}
    </h2>

    <form @submit.prevent="onSubmit" class="space-y-3">
      <input v-model="localEmployee.name" placeholder="Name" required class="border p-2 w-full rounded" />
      <input v-model="localEmployee.email" placeholder="Email" required class="border p-2 w-full rounded" />
      <input v-model="localEmployee.department" placeholder="Department" class="border p-2 w-full rounded" />
      <input v-model="localEmployee.position" placeholder="Position" class="border p-2 w-full rounded" />
      <select v-model="localEmployee.status" class="border p-2 w-full rounded">
        <option>Active</option>
        <option>Inactive</option>
      </select>

      <div class="flex gap-3 mt-4">
        <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
          {{ employee?.id ? 'Update' : 'Add' }}
        </button>
        
        <button type="button" @click="$emit('cancel')" class="bg-gray-300 px-4 py-2 rounded">Cancel</button>
        
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive, watch } from 'vue'
import AppNember from './AppNember.vue'

const props = defineProps({ employee: Object })
const emit = defineEmits(['save', 'cancel'])

// Local reactive copy for editing/adding
const localEmployee = reactive({
  id: '',
  name: '',
  email: '',
  department: '',
  position: '',
  status: 'Active'
})

// Watch for parent prop changes (edit mode)
watch(
  () => props.employee,
  (newVal) => {
    if (newVal) {
      Object.assign(localEmployee, newVal)
    } else {
      Object.assign(localEmployee, { id:'', name:'', email:'', department:'', position:'', status:'Active' })
    }
  },
  { immediate: true }
)

function onSubmit() {
  emit('save', { ...localEmployee }) // send copy to parent
}
</script>