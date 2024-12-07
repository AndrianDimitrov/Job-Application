<template>
  <div class="card">
    <img :src="job.imageSrc" alt="Job Image" />
    <h3>{{ job.name }}</h3>
    <p>{{ job.description }}</p>
    <button @click="deleteJob">Delete</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps(['job']);
defineEmits(['delete-job']);

const deleteJob = () => {
  emit('delete-job', job.id); // Emit delete-job event with the job ID
};
</script>

<style>
.card {
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 16px;
}

.card img {
  max-width: 100%;
  height: auto;
  margin-bottom: 15px;
}

button {
  background-color: #f44336;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #d32f2f;
}
</style>
