<template>
  <div class="flex h-screen bg-gray-100">

    <main class="flex-1 p-8 overflow-y-auto">

      <!-- HEADER -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-700">Dashboard</h1>

        <div class="flex items-center gap-4">
          <div class="text-right">
            <p class="text-sm text-gray-500">{{ currentDate }}</p>
            <p class="font-semibold">{{ currentTime }}</p>
          </div>

          <div class="flex items-center gap-3">
            <span class="text-gray-600">Admin</span>
            <div class="w-10 h-10 rounded-full bg-gray-400 overflow-hidden">
              <img src="../assets/img/emply.png" />
            </div>
          </div>
        </div>
      </div>

      <!-- DASHBOARD CARDS -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">

        <div class="bg-blue-500 p-6 rounded-lg shadow">
          <h2 class="text-withe-300">Total Employees</h2>
          <p class="text-3xl font-bold mt-2">{{ totalEmployees }}</p>
        </div>

        <div class="bg-yellow-400 p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Today Attendance</h2>
          <p class="text-3xl font-bold mt-2">{{ todayAttendance }}</p>
        </div>

        <div class="bg-red-500 p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Pending Leaves</h2>
          <p class="text-3xl font-bold mt-2">{{ pendingLeaves }}</p>
        </div>

        <div class="bg-purple-500 p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Overtime Hours</h2>
          <p class="text-3xl font-bold mt-2">{{ overtimeHours }}</p>
        </div>

        <div class="bg-pink-500 p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Late Today</h2>
          <p class="text-3xl font-bold mt-2">{{ lateToday }}</p>
        </div>

      </div>

      <!-- QUICK ACTION -->
      <div class="flex gap-4 mb-8">
        <button
        @click="checkIn('John Kim')"
        class="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600">
        Check In
        </button>

        <button
        @click="checkOut('John Kim')"
        class="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600">
        Check Out
        </button>
      </div>

      <!-- ATTENDANCE TABLE -->
      <div class="bg-withe-500 p-6 rounded-lg shadow mb-8">

        <h2 class="text-xl font-semibold mb-4">
          Recent Attendance
        </h2>

        <table class="w-full text-left">

          <thead class="border-b">
            <tr>
              <th class="py-2">Employee</th>
              <th class="py-2">Date</th>
              <th class="py-2">Check In</th>
              <th class="py-2">Check Out</th>
              <th class="py-2">Status</th>
            </tr>
          </thead>

          <tbody>

            <tr
            v-for="(record,index) in attendanceRecords"
            :key="index"
            class="border-b"
            >

              <td class="py-2">{{ record.employee }}</td>
              <td class="py-2">{{ record.date }}</td>
              <td class="py-2">{{ record.checkIn }}</td>
              <td class="py-2">{{ record.checkOut }}</td>

              <td
              class="font-semibold"
              :class="{
                'text-green-600': record.status==='Present',
                'text-yellow-600': record.status==='Late',
                'text-red-600': record.status==='Absent'
              }"
              >
              {{ record.status }}
              </td>

            </tr>

          </tbody>

        </table>

      </div>

      <!-- LEAVE REQUEST -->
      <div class="bg-withe-500 p-6 rounded-lg shadow mb-8">

        <h2 class="text-xl font-semibold mb-4">
          Recent Leave Requests
        </h2>

        <ul class="divide-y">

          <li
          v-for="(leave,index) in leaveRequests"
          :key="index"
          class="py-3 flex justify-between items-center"
          >

            <div>
              <p class="font-semibold">
                {{ leave.employee }}
              </p>

              <p class="text-gray-500 text-sm">
                {{ leave.type }} | {{ leave.date }}
              </p>
            </div>

            <div class="flex gap-2">

              <button
              @click="approveLeave(index)"
              class="px-3 py-1 bg-green-500 text-white rounded">
              Approve
              </button>

              <button
              @click="rejectLeave(index)"
              class="px-3 py-1 bg-red-500 text-white rounded">
              Reject
              </button>

            </div>

          </li>

        </ul>

      </div>

      <!-- SHIFT OVERVIEW -->
      <div class="bg-blue-500 p-6 rounded-lg shadow">

        <h2 class="text-xl font-semibold mb-4">
          Shift Schedule Overview
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">

          <div
          v-for="(shift,index) in shifts"
          :key="index"
          class="bg-gray-50 p-4 rounded shadow"
          >

            <p class="font-semibold">
              {{ shift.name }}
            </p>

            <p class="text-gray-500">
              {{ shift.time }}
            </p>

            <p class="text-green-600 font-semibold mt-2">
              Assigned: {{ shift.employees }} Employees
            </p>

          </div>

        </div>

      </div>

    </main>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const currentTime = ref("")
const currentDate = ref("")

function updateClock(){
const now = new Date()
currentTime.value = now.toLocaleTimeString()
currentDate.value = now.toDateString()
}

onMounted(()=>{
updateClock()
setInterval(updateClock,1000)
})

const employees = ref([
{ id:"EMP001", name:"John Kim", salary:1500 },
{ id:"EMP002", name:"Min Soo", salary:1300 },
{ id:"EMP003", name:"Jae Park", salary:1700 },
{ id:"EMP004", name:"Soojin Lee", salary:1600 }
])

const totalEmployees = computed(()=> employees.value.length)

const attendanceRecords = ref([
{
employee:"Hak SovanPhanha",
date:"2026-03-12",
checkIn:"08:00",
checkOut:"17:00",
status:"Present"
},
{
employee:"Yan Kakada",
date:"2026-03-12",
checkIn:"08:20",
checkOut:"17:10",
status:"Late"
},
{
employee:"Hak Sovanphanha",
date:"2026-03-12",
checkIn:"-",
checkOut:"-",
status:"Absent"
}
])

const todayAttendance = ref(2)
const pendingLeaves = ref(2)
const overtimeHours = ref(42)
const lateToday = ref(1)

function checkIn(employeeName){
attendanceRecords.value.push({
employee:employeeName,
date:new Date().toISOString().split("T")[0],
checkIn:new Date().toLocaleTimeString(),
checkOut:"-",
status:"Present"
})
todayAttendance.value++
}

function checkOut(employeeName){
const record = attendanceRecords.value.find(
r => r.employee === employeeName && r.checkOut === "-"
)

if(record){
record.checkOut = new Date().toLocaleTimeString()
}
}

const leaveRequests = ref([
{
employee:"Soojin Lee",
type:"Annual Leave",
date:"2026-03-15 to 2026-03-17",
status:"Pending"
},
{
employee:"Jung Park",
type:"Sick Leave",
date:"2026-03-13",
status:"Pending"
}
])

function approveLeave(index){
leaveRequests.value[index].status="Approved"
pendingLeaves.value--
}

function rejectLeave(index){
leaveRequests.value[index].status="Rejected"
pendingLeaves.value--
}

const shifts = ref([
{ name:"Morning Shift", time:"08:00 - 16:00", employees:10 },
{ name:"Evening Shift", time:"16:00 - 00:00", employees:8 },
{ name:"Night Shift", time:"00:00 - 08:00", employees:5 }
])
</script>
