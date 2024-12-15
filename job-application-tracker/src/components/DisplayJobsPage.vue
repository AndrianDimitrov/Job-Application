<template>
  <div>
    <h1>All Job Applications</h1>
    <section v-if="jobs.length > 0" class="grid">
      <JobApplicationCard
        v-for="job in jobs"
        :key="job.id"
        :job="job" 
        @delete-job="handleDeleteJob"
      />
    </section>
    <p v-else>No job applications found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import JobApplicationCard from './JobApplicationCard.vue';

const jobs = ref([]);

onMounted(async () => {
  const localJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  jobs.value = localJobs;
  console.log('Loaded jobs in DisplayJobsPage:', jobs.value); // Debugging log
});

// Handle delete-job event
const handleDeleteJob = (id) => {
  console.log(`Deleting job with ID: ${id}`);
  jobs.value = jobs.value.filter((job) => job.id !== id);
  localStorage.setItem('jobs', JSON.stringify(jobs.value));
};
</script>


<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
