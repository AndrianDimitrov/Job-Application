<template>
  <div>
    <h1>All Job Applications</h1>
    <section v-if="jobs.length > 0" class="grid">
      <JobApplicationCard
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        @delete-job="deleteJob"
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
  const localJobs = JSON.parse(localStorage.getItem('jobs') || '[]'); // Get jobs from localStorage

  try {
    const response = await fetch('/job-applications.json'); // Load jobs from JSON file
    if (response.ok) {
      const jsonJobs = await response.json();

      // Merge jobs while avoiding duplicates
      jobs.value = [
        ...localJobs,
        ...jsonJobs.filter((job) => !localJobs.some((localJob) => localJob.id === job.id)),
      ];
    } else {
      jobs.value = localJobs;
      console.error('Failed to load job applications JSON');
    }
  } catch (error) {
    jobs.value = localJobs;
    console.error('Error loading job applications:', error);
  }
});

// Handle job deletion
const deleteJob = (id) => {
  jobs.value = jobs.value.filter((job) => job.id !== id); // Remove the job from the list
  localStorage.setItem('jobs', JSON.stringify(jobs.value)); // Update localStorage
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}
</style>
