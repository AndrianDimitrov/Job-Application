<template>
  <div class="container">
    <h1 class="title">Add a New Job</h1>
    <div class="form-container">
      <AddJobApplication @add-job="handleAddJob" />
    </div>
  </div>
</template>

<script setup>
import AddJobApplication from './AddJobApplication.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const handleAddJob = (newJob) => {
  const jobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  jobs.push(newJob);
  localStorage.setItem('jobs', JSON.stringify(jobs));
  router.push('/display-jobs');
};
</script>

<style scoped>
/* Container Styling */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9fb;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  color: #333;
  text-align: center;
}

/* Title Styling */
.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 20px;
  color: #6b64f3;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* Form Container */
.form-container {
  padding: 20px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
}

/* Add Job Button Styling */
button {
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #6b64f3;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;
}

button:hover {
  background-color: #534bf3;
  transform: scale(1.05);
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .container {
    padding: 15px;
  }
  .title {
    font-size: 2rem;
  }
}
</style>
