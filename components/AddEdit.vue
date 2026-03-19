<template>
  <div class="p-6 md:p-10 bg-gray-100 min-h-screen">

    <!-- PAGE TITLE -->
    <div class="mb-10 flex justify-between">
      <h1 class="text-2xl md:text-4xl font-bold text-gray-700">
        Employee Statistics Dashboard
         <p class="text-gray-500 mt-2 text-sm md:text-base font-light">
        Overview of employee analytics and company performance
      </p>
      </h1>
     
      <NuxtLink to="../page/AddEmployees">
      <button class="block px-5 py-5 rounded-lg text-blue-600 font-medium hover:bg-blue-100 transition">Add Employees</button>
      </NuxtLink>
    </div>

    <!-- TOP CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

      <div class="bg-white p-6 rounded-lg shadow text-center">
        <p class="text-gray-500">Total Employees</p>
        <h2 class="text-3xl md:text-4xl font-bold text-blue-600 mt-3">
          {{ statistics.totalEmployees }}
        </h2>
      </div>

      <div class="bg-white p-6 rounded-lg shadow text-center">
        <p class="text-gray-500">New Employees</p>
        <h2 class="text-3xl md:text-4xl font-bold text-green-600 mt-3">
          {{ statistics.newEmployees }}
        </h2>
      </div>

      <div class="bg-white p-6 rounded-lg shadow text-center">
        <p class="text-gray-500">Departments</p>
        <h2 class="text-3xl md:text-4xl font-bold text-purple-600 mt-3">
          {{ statistics.departments }}
        </h2>
      </div>

      <div class="bg-white p-6 rounded-lg shadow text-center">
        <p class="text-gray-500">Company Growth</p>
        <h2 class="text-3xl md:text-4xl font-bold text-yellow-500 mt-3">
          {{ statistics.growth }}%
        </h2>
      </div>

    </div>


    <!-- DEPARTMENTS -->
    <div class="bg-white p-6 md:p-8 rounded-lg shadow mb-12">

      <h2 class="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Employees by Department
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-blue-50 p-6 rounded-lg">
          <p class="text-gray-600">IT Department</p>
          <h3 class="text-2xl md:text-3xl font-bold text-blue-600">
            {{ departments.it }}
          </h3>
        </div>

        <div class="bg-green-50 p-6 rounded-lg">
          <p class="text-gray-600">Human Resources</p>
          <h3 class="text-2xl md:text-3xl font-bold text-green-600">
            {{ departments.hr }}
          </h3>
        </div>

        <div class="bg-purple-50 p-6 rounded-lg">
          <p class="text-gray-600">Finance</p>
          <h3 class="text-2xl md:text-3xl font-bold text-purple-600">
            {{ departments.finance }}
          </h3>
        </div>

        <div class="bg-yellow-50 p-6 rounded-lg">
          <p class="text-gray-600">Marketing</p>
          <h3 class="text-2xl md:text-3xl font-bold text-yellow-600">
            {{ departments.marketing }}
          </h3>
        </div>

        <div class="bg-red-50 p-6 rounded-lg">
          <p class="text-gray-600">Sales</p>
          <h3 class="text-2xl md:text-3xl font-bold text-red-600">
            {{ departments.sales }}
          </h3>
        </div>

        <div class="bg-indigo-50 p-6 rounded-lg">
          <p class="text-gray-600">Support</p>
          <h3 class="text-2xl md:text-3xl font-bold text-indigo-600">
            {{ departments.support }}
          </h3>
        </div>

      </div>

    </div>


    <!-- EMPLOYEE STATUS -->
    <div class="bg-white p-6 md:p-8 rounded-lg shadow mb-12">

      <h2 class="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Employee Status
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <div class="bg-green-100 p-6 rounded-lg text-center">
          <p>Active Employees</p>
          <h3 class="text-2xl md:text-3xl font-bold text-green-700">
            {{ status.active }}
          </h3>
        </div>

        <div class="bg-red-100 p-6 rounded-lg text-center">
          <p>Inactive Employees</p>
          <h3 class="text-2xl md:text-3xl font-bold text-red-700">
            {{ status.inactive }}
          </h3>
        </div>

        <div class="bg-blue-100 p-6 rounded-lg text-center">
          <p>Employees On Leave</p>
          <h3 class="text-2xl md:text-3xl font-boldtext-blue-700">
            {{ status.leave }}
          </h3>
        </div>

      </div>

    </div>


    <!-- MONTHLY HIRING TABLE -->
    <div class="bg-white p-6 md:p-8 rounded-lg shadow mb-12 overflow-x-auto">

      <h2 class="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Monthly Hiring Statistics
      </h2>

      <table class="w-full text-left border min-w-[400px]">

        <thead class="bg-gray-100">
          <tr>
            <th class="p-4">Month</th>
            <th class="p-4">Employees Hired</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="month in monthlyHiring" :key="month.name" class="border-t">
            <td class="p-4">{{ month.name }}</td>
            <td class="p-4 font-bold text-blue-600">
              {{ month.hired }}
            </td>
          </tr>
        </tbody>

      </table>

    </div>


    <!-- PERFORMANCE -->
    <div class="bg-white p-6 md:p-8 rounded-lg shadow mb-12">

      <h2 class="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Department Performance
      </h2>

      <div class="space-y-6">

        <div v-for="item in performance" :key="item.department">

          <div class="flex justify-between mb-1">
            <span>{{ item.department }}</span>
            <span>{{ item.percent }}%</span>
          </div>

          <div class="w-full bg-gray-200 h-3 rounded">
            <div
              class="bg-blue-500 h-3 rounded"
              :style="{ width: item.percent + '%' }"
            ></div>
          </div>

        </div>

      </div>

    </div>


    <!-- ACTIVITY -->
    <div class="bg-white p-6 md:p-8 rounded-lg shadow">

      <h2 class="text-xl md:text-2xl font-bold text-gray-700 mb-6">
        Recent Employee Activity
      </h2>

      <ul class="space-y-4">

        <li
          v-for="activity in activities"
          :key="activity.id"
          class="border-b pb-3"
        >
          <p class="font-semibold">
            {{ activity.name }}
          </p>

          <p class="text-gray-500 text-sm">
            {{ activity.action }}
          </p>
        </li>

      </ul>

    </div>

  </div>
</template>
<script setup>

import { reactive } from "vue"

const statistics = reactive({
  totalEmployees: 120,
  newEmployees: 15,
  departments: 6,
  growth: 12
})

const departments = reactive({
  it: 30,
  hr: 12,
  finance: 18,
  marketing: 20,
  sales: 25,
  support: 15
})

const status = reactive({
  active: 100,
  inactive: 10,
  leave: 10
})

const monthlyHiring = [
  { name: "January", hired: 5 },
  { name: "February", hired: 8 },
  { name: "March", hired: 12 },
  { name: "April", hired: 10 },
  { name: "May", hired: 15 },
  { name: "June", hired: 9 }
]

const performance = [
  { department: "IT", percent: 85 },
  { department: "HR", percent: 70 },
  { department: "Finance", percent: 75 },
  { department: "Marketing", percent: 80 },
  { department: "Sales", percent: 90 }
]

const activities = [
  { id: 1, name: "John Doe", action: "Joined IT Department" },
  { id: 2, name: "Sarah Lee", action: "Promoted to Manager" },
  { id: 3, name: "Michael Tan", action: "Transferred to Marketing" },
  { id: 4, name: "Anna Kim", action: "Started annual leave" }
]

</script>