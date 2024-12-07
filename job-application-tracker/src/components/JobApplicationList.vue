<template>
  <div>
    <JobApplicationCard
      v-for="job in applications"
      :key="job.id"
      :job="job"
      @delete-job="deleteJob"
    />
  </div>
</template>

<script setup>
import JobApplicationCard from './JobApplicationCard.vue';
import { defineProps, defineEmits } from 'vue';

defineProps(['applications']);
defineEmits(['delete-job']);

const deleteJob = (id) => {
  emit('delete-job', id); // Emit the delete-job event to the parent
};
</script>
