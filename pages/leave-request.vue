<script setup>
import { ref } from "vue"
import EmployeeInfoCard from "~/components/EmployeeInfoCard.vue"
import LeaveRequestForm from "~/components/LeaveRequestForm.vue"
import LeaveRequestTable from "~/components/LeaveRequestTable.vue"
import RequestDetailModal from "~/components/RequestDetailModal.vue"

const employee = ref({
  id: "EMP001",
  name: "Yan Kakada",
  department: "IT",
  position: "Frontend Developer",
  email: "kakada@gmail.com",
  phone: "081351416"
})

const requests = ref([])
const selectedRequest = ref(null)
const showModal = ref(false)

const addRequest = (data) => {
  requests.value.push({
    id: "#" + String(requests.value.length + 1).padStart(3,"0"),
    ...data,
    status: "Pending"
  })
}

const openModal = (req) => {
  selectedRequest.value = req
  showModal.value = true
}
</script>

<template>
  <div class="space-y-8">

    <EmployeeInfoCard :employee="employee" />

    <LeaveRequestForm @submitRequest="addRequest" />

    <LeaveRequestTable
      :requests="requests"
      @viewRequest="openModal"
    />

    <RequestDetailModal
      v-if="showModal"
      :request="selectedRequest"
      :employee="employee"
      @close="showModal=false"
    />

  </div>
</template>