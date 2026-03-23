<template>
  
  <div class="min-h-screen bg-sky-50 p-6">
    <!-- Header -->
    <div class="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-4">
      <h1 class="text-3xl font-bold text-sky-800">Attendance Management</h1>
      <button
        @click="showModal = true"
        class="bg-sky-600 text-white px-5 py-2 rounded-lg hover:bg-sky-700 transition"
      >
        Add Employee
      </button>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
      <div class="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <p class="text-gray-500 mb-2">Total Employees</p>
        <p class="text-3xl font-bold text-sky-800">{{ employees.length }}</p>
      </div>
      <div class="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <p class="text-gray-500 mb-2">Present Today</p>
        <p class="text-3xl font-bold text-green-600">{{ presentCount }}</p>
      </div>
      <div class="bg-white rounded-xl shadow p-5 flex flex-col items-center">
        <p class="text-gray-500 mb-2">Absent Today</p>
        <p class="text-3xl font-bold text-red-600">{{ absentCount }}</p>
      </div>
    </div>

    <!-- Filters -->
    <div class="flex flex-col md:flex-row gap-4 mb-4">
      <input
        v-model="search"
        type="text"
        placeholder="Search employee..."
        class="flex-1 border border-sky-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
      />
      <select v-model="filterStatus" class="border border-sky-300 rounded-lg px-4 py-2">
        <option value="">All Status</option>
        <option value="present">Present</option>
        <option value="absent">Absent</option>
        <option value="leave">On Leave</option>
      </select>
      <input type="date" v-model="filterDate" class="border border-sky-300 rounded-lg px-4 py-2" />
      <button @click="resetFilters" class="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300">Reset</button>
    </div>

    <!-- Employee Table -->
    <div class="bg-white shadow rounded-xl overflow-x-auto">
      <table class="min-w-full text-left">
        <thead class="bg-sky-100 text-sky-800">
          <tr>
            <th class="px-6 py-3">#</th>
            <th class="px-6 py-3">Employee Name</th>
            <th class="px-6 py-3">Department</th>
            <th class="px-6 py-3">Check-In</th>
            <th class="px-6 py-3">Check-Out</th>
            <th class="px-6 py-3">Status</th>
            <th class="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(emp, index) in filteredEmployees"
            :key="emp.id"
            class="border-b hover:bg-sky-50 transition"
          >
            <td class="px-6 py-3">{{ index + 1 }}</td>
            <td class="px-6 py-3 font-semibold text-sky-800">{{ emp.name }}</td>
            <td class="px-6 py-3">{{ emp.department }}</td>
            <td class="px-6 py-3">{{ emp.checkIn   }}</td>
            <td class="px-6 py-3">{{ emp.checkOut   }}</td>
            <td class="px-6 py-3">
              <span
                :class="{
                  'text-green-600': emp.status === 'present',
                  'text-red-600': emp.status === 'absent',
                  'text-yellow-500': emp.status === 'leave',
                  'font-semibold': true
                }"
              >
                {{ emp.status }}
              </span>
            </td>
            <td class="px-6 py-3 flex gap-2">
              <button
                @click="markAttendance(emp.id, 'present')"
                class="bg-sky-500 text-white px-3 py-1 rounded hover:bg-sky-600"
              >
                Check-In
              </button>
              <button
                @click="markAttendance(emp.id, 'absent')"
                class="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Check-Out
              </button>
            </td>
          </tr>
          <tr v-if="filteredEmployees.length === 0"><td colspan="7" class="px-6 py-4 text-center text-gray-500">No employees found</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Add Attendance Modal -->
    <div
      v-if="showModal"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="bg-white rounded-xl p-6 w-full max-w-md relative">
        <h2 class="text-2xl font-bold mb-4 text-sky-800">Add Employee</h2>
        <div class="flex flex-col gap-3">
          <input
            v-model="newEmployee.name"
            type="text"
            placeholder="Employee Name"
            class="border border-sky-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            v-model="newEmployee.department"
            type="text"
            placeholder="Department"
            class="border border-sky-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <select v-model="newEmployee.status" class="border border-sky-300 rounded-lg px-3 py-2">
            <option value="present">Present</option>
            <option value="absent">Absent</option>
            <option value="leave">On Leave</option>
          </select>
        </div>

        <div class="flex justify-end mt-4 gap-3">
          <button @click="showModal = false" class="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300">Cancel</button>
          <button @click="addEmployee" class="px-4 py-2 rounded-lg bg-sky-600 text-white hover:bg-sky-700">Add</button>
        </div>

        <button
          @click="showModal = false"
          class="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const employees = ref([
  { id: 1, name: 'John Doe', department: 'HR', checkIn: '09:00', checkOut: '17:00', status: 'present' },
  { id: 2, name: 'Jane Smith', department: 'IT', checkIn: null, checkOut: null, status: 'absent' },
  { id: 3, name: 'Alice Johnson', department: 'Finance', checkIn: '09:15', checkOut: null, status: 'present' },
  { id: 4, name: 'Bob Lee', department: 'Marketing', checkIn: null, checkOut: null, status: 'leave' },
])

// Filters
const search = ref('')
const filterStatus = ref('')
const filterDate = ref('')

// Modal state
const showModal = ref(false)
const newEmployee = ref({ name: '', department: '', status: 'present', checkIn: null, checkOut: null })

const filteredEmployees = computed(() => {
  return employees.value.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(search.value.toLowerCase())
    const matchesStatus = filterStatus.value ? emp.status === filterStatus.value : true
    return matchesSearch && matchesStatus
  })
})

const presentCount = computed(() => employees.value.filter(emp => emp.status === 'present').length)
const absentCount = computed(() => employees.value.filter(emp => emp.status === 'absent').length)

const resetFilters = () => {
  search.value = ''
  filterStatus.value = ''
  filterDate.value = ''
}

const markAttendance = (id, type) => {
  const emp = employees.value.find(e => e.id === id)
  if (!emp) return
  if (type === 'present') emp.status = 'present', emp.checkIn = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  else if (type === 'absent') emp.status = 'absent', emp.checkOut = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}
const addEmployee = () => {
  if (!newEmployee.value.name || !newEmployee.value.department) return alert('Please fill in all fields')
  const id = employees.value.length ? Math.max(...employees.value.map(e => e.id)) + 1 : 1
  employees.value.push({
    id,
    name: newEmployee.value.name,
    department: newEmployee.value.department,
    status: newEmployee.value.status,
    checkIn: newEmployee.value.status === 'present' ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : null,
    checkOut: null,
  })
  newEmployee.value = { name: '', department: '', status: 'present', checkIn: null, checkOut: null }
  showModal.value = false
}
</script>