<template>

<div class="p-8 bg-gray-100 ">
    
<div class="flex justify-between items-center mb-6">

<h1 class="text-3xl font-bold text-gray-700">
Employee Management
</h1>

<div class="text-gray-600">
Total Employees: 
<span class="font-bold text-blue-600">
{{ employees.length }}
</span>
</div>

</div>



<div class="bg-white p-6 rounded-lg shadow mb-8">

<h2 class="text-xl font-semibold mb-4">
Add / Edit Employee
</h2>

<div class="grid grid-cols-5 gap-4">

<input
v-model="employee.name"
placeholder="Employee Name"
class="border p-2 rounded"
/>

<input
v-model="employee.position"
placeholder="Position"
class="border p-2 rounded"
/>

<input
v-model="employee.email"
placeholder="Email"
class="border p-2 rounded"
/>

<input
v-model="employee.phone"
placeholder="Phone"
class="border p-2 rounded"
/>

<button
@click="saveEmployee"
class="bg-blue-600 hover:bg-blue-700 text-white rounded"
>
Save
</button>

</div>

</div>



<div class="mb-4">

<input
v-model="search"
placeholder="Search employee..."
class="border p-2 rounded w-64"
/>

</div>



<div class="bg-white rounded-lg shadow p-6">

<table class="w-full text-left">

<thead class="border-b text-gray-600">

<tr>
<th class="p-3">Employee</th>
<th class="p-3">Position</th>
<th class="p-3">Email</th>
<th class="p-3">Phone</th>
<th class="p-3">Action</th>
</tr>

</thead>


<tbody>

<tr
v-for="(emp,index) in filteredEmployees"
:key="index"
class="border-b hover:bg-gray-50"
>

<td class="p-3 flex items-center gap-3">


<span class="font-medium">
{{ emp.name }}
</span>

</td>

<td class="p-3">
{{ emp.position }}
</td>

<td class="p-3 text-gray-600">
{{ emp.email }}
</td>

<td class="p-3">
{{ emp.phone }}
</td>

<td class="p-3 space-x-2">

<button
@click="editEmployee(emp,index)"
class="bg-yellow-400 hover:bg-yellow-500 px-3 py-1 rounded"
>
Edit
</button>

<button
@click="deleteEmployee(index)"
class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
>
Delete
</button>

</td>

</tr>

</tbody>

</table>

</div>

</div>

</template>



<script setup>
import { ref, computed } from "vue"

const employees = ref([])

const search = ref("")

const employee = ref({
name: "",
position: "",
email: "",
phone: ""
})

const editIndex = ref(null)



function saveEmployee(){

if(editIndex.value !== null){

employees.value[editIndex.value] = {...employee.value}
editIndex.value = null

}else{

employees.value.push({...employee.value})

}

employee.value = {
name:"",
position:"",
email:"",
phone:""
}

}



function editEmployee(emp,index){

employee.value = {...emp}
editIndex.value = index

}



function deleteEmployee(index){

employees.value.splice(index,1)

}



const filteredEmployees = computed(()=>{

return employees.value.filter(emp =>
emp.name.toLowerCase().includes(search.value.toLowerCase())
)

})


</script>