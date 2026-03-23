<script setup>
import { ref, computed } from 'vue'

// STATE
const search = ref('')
const selectedDay = ref('Monday')
const showActiveOnly = ref(false)

const days = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']

const staff = ref([])

// FORM
const form = ref({
  name: '',
  location: '',
  role: '',
  start: '',
  end: '',
  date: '',
  active: true
})

// ADD SCHEDULE
const addSchedule = () => {
  if (!form.value.name || !form.value.start || !form.value.end) {
    alert('Please fill required fields')
    return
  }

  staff.value.push({
    id: Date.now(),
    name: form.value.name,
    location: form.value.location,
    role: form.value.role,
    shift: `${form.value.start} - ${form.value.end}`,
    date: form.value.date,
    day: selectedDay.value,
    status: 'Draft',
    active: form.value.active,
    img: `https://i.pravatar.cc/150?u=${Date.now()}`
  })

  // reset
  form.value = {
    name: '',
    location: '',
    role: '',
    start: '',
    end: '',
    date: '',
    active: true
  }
}

// DELETE
const removeStaff = (id) => {
  staff.value = staff.value.filter(s => s.id !== id)
}

// FILTER
const filteredStaff = computed(() => {
  return staff.value.filter(p => {
    const matchSearch = Object.values(p).join(' ').toLowerCase().includes(search.value.toLowerCase())
    const matchDay = p.day === selectedDay.value
    const matchActive = showActiveOnly.value ? p.active : true
    return matchSearch && matchDay && matchActive
  })
})
</script>

<template>
<div class="min-h-screen bg-white p-4">
  <div class="max-w-[900px] mx-auto">

    <!-- HEADER -->
    <h1 class="text-2xl font-bold mb-4">Roster Management</h1>

    <!-- DAY SELECT -->
    <div class="flex gap-2 mb-4 overflow-x-auto">
      <button v-for="day in days" :key="day" @click="selectedDay = day"
        :class="selectedDay===day ? 'bg-blue-500 text-white px-4 py-2 rounded-full' : 'bg-gray-200 px-4 py-2 rounded-full'">
        {{ day }}
      </button>
    </div>

    <!-- SEARCH + FILTER -->
    <div class="flex gap-2 mb-4">
      <input v-model="search" placeholder="Search..." class="border p-2 w-full rounded" />
      <label class="flex items-center gap-2">
        <input type="checkbox" v-model="showActiveOnly" /> Active only
      </label>
    </div>

    <!-- FORM -->
    <div class="border p-4 rounded mb-6">
      <h2 class="font-bold mb-2">Add Schedule</h2>
      <input v-model="form.name" placeholder="Name" class="border p-2 w-full mb-2" />
      <input v-model="form.location" placeholder="Location" class="border p-2 w-full mb-2" />
      <input v-model="form.role" placeholder="Role" class="border p-2 w-full mb-2" />

      <div class="flex gap-2 mb-2">
        <input type="time" v-model="form.start" class="border p-2 w-full" />
        <input type="time" v-model="form.end" class="border p-2 w-full" />
      </div>

      <input type="date" v-model="form.date" class="border p-2 w-full mb-2" />

      <label class="flex items-center gap-2 mb-2">
        <input type="checkbox" v-model="form.active" /> Active
      </label>

      <button @click="addSchedule" class="bg-blue-500 text-white px-4 py-2 rounded w-full">Add</button>
    </div>

    <!-- LIST -->
    <div class="bg-gray-100 p-4 rounded">
      <div v-for="p in filteredStaff" :key="p.id" class="bg-white p-4 mb-3 rounded flex justify-between items-center">

        <div class="flex gap-4 items-center">
          <img :src="p.img" class="w-14 h-14 rounded-full" />
          <div>
            <h3 class="font-bold">{{ p.name }}</h3>
            <p class="text-sm text-gray-500">{{ p.location }}</p>
            <p class="text-xs">{{ p.role }}</p>
          </div>
        </div>

        <div class="text-right">
          <p class="font-bold">{{ p.shift }}</p>
          <p class="text-xs">{{ p.date }}</p>
          <p class="text-xs">{{ p.active ? '🟢 Active' : '🔴 Inactive' }}</p>
          <button @click="removeStaff(p.id)" class="text-red-500 text-xs mt-1">Delete</button>
        </div>

      </div>

      <p v-if="filteredStaff.length===0" class="text-centertext-gray-400">No data</p>
    </div>

  </div>
</div>
</template>