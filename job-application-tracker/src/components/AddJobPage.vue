<template>
  <div>
    <h1>Add a New Job</h1>
    <AddJobApplication @add-job="handleAddJob" />
  </div>
</template>

<script setup>
import AddJobApplication from './AddJobApplication.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleAddJob = (newJob) => {
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]'); // Get existing jobs
  jobs.push(newJob); // Add new job
  localStorage.setItem('jobs', JSON.stringify(jobs)); // Save updated jobs to localStorage
  router.push('/display-jobs'); // Redirect to the "View Jobs" page
};
</script>
