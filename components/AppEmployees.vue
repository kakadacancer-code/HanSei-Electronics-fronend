<template>
  <div class="flex h-screen bg-gray-100">

    <!-- Main Content -->
    <main class="flex-1 p-8 overflow-y-auto">

      <!-- Header -->
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-3xl font-bold text-gray-700">Dashboard</h1>
        <div class="flex items-center gap-3">
          <span class="text-gray-600">Admin</span>
          <div class="w-10 h-10 rounded-full bg-gray-400">
            <img src="../assets/img/emply.png" alt="">
          </div>
        </div>
      </div>

      <!-- Dashboard Cards -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Total Employees</h2>
          <p class="text-3xl font-bold mt-2">120</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Today Attendance</h2>
          <p class="text-3xl font-bold mt-2">95</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Pending Leaves</h2>
          <p class="text-3xl font-bold mt-2">8</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Overtime Hours</h2>
          <p class="text-3xl font-bold mt-2">42</p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow">
          <h2 class="text-gray-500">Late Today</h2>
          <p class="text-3xl font-bold mt-2">5</p>
        </div>

      </div>

      <!-- Quick Actions -->
      <div class="flex gap-4 mb-8">
        <button class="flex-1 bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 font-semibold">
          Check In
        </button>
        <button class="flex-1 bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 font-semibold">
          Check Out
        </button>
        <button class="flex-1 bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold">
          Submit Leave
        </button>
      </div>

      <!-- Attendance Table -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">Recent Attendance</h2>

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
            <tr class="border-b">
              <td class="py-2">John Kim</td>
              <td class="py-2">2026-03-12</td>
              <td class="py-2">08:00</td>
              <td class="py-2">17:00</td>
              <td class="text-green-600 font-semibold">Present</td>
            </tr>
            <tr class="border-b">
              <td class="py-2">Min Soo</td>
              <td class="py-2">2026-03-12</td>
              <td class="py-2">08:20</td>
              <td class="py-2">17:10</td>
              <td class="text-yellow-600 font-semibold">Late</td>
            </tr>
            <tr>
              <td class="py-2">Jae Park</td>
              <td class="py-2">2026-03-12</td>
              <td class="py-2">-</td>
              <td class="py-2">-</td>
              <td class="text-red-600 font-semibold">Absent</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Leave Requests -->
      <div class="bg-white p-6 rounded-lg shadow mb-8">
        <h2 class="text-xl font-semibold mb-4">Recent Leave Requests</h2>

        <ul class="divide-y divide-gray-200">
          <li class="py-2 flex justify-between items-center">
            <div>
              <p class="font-semibold">Soojin Lee</p>
              <p class="text-gray-500 text-sm">Annual Leave | 2026-03-15 to 2026-03-17</p>
            </div>
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Approve</button>
              <button class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reject</button>
            </div>
          </li>
          <li class="py-2 flex justify-between items-center">
            <div>
              <p class="font-semibold">Jung Park</p>
              <p class="text-gray-500 text-sm">Sick Leave | 2026-03-13</p>
            </div>
            <div class="flex gap-2">
              <button class="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Approve</button>
              <button class="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Reject</button>
            </div>
          </li>
        </ul>
      </div>

      <!-- Shift Overview -->
      <div class="bg-white p-6 rounded-lg shadow">
        <h2 class="text-xl font-semibold mb-4">Shift Schedule Overview</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="bg-gray-50 p-4 rounded shadow">
            <p class="font-semibold">Morning Shift</p>
            <p class="text-gray-500">08:00 - 16:00</p>
            <p class="text-green-600 font-semibold mt-2">Assigned: 10 Employees</p>
          </div>
          <div class="bg-gray-50 p-4 rounded shadow">
            <p class="font-semibold">Evening Shift</p>
            <p class="text-gray-500">16:00 - 00:00</p>
            <p class="text-yellow-600 font-semibold mt-2">Assigned: 8 Employees</p>
          </div>
          <div class="bg-gray-50 p-4 rounded shadow">
            <p class="font-semibold">Night Shift</p>
            <p class="text-gray-500">00:00 - 08:00</p>
            <p class="text-red-600 font-semibold mt-2">Assigned: 5 Employees</p>
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
// For now, data is static.
// Later you can replace with API calls using useFetch or axios.
</script>

<style scoped>
/* Optional: You can add custom scrollbar style */
</style>