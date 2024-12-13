<template>
  <div class="card">
    <div class="card-border-top"></div>
    <div class="img">
      <img :src="job.imageSrc" alt="Job Image" />
    </div>
    <span>{{ job.name }}</span>
    <p class="job">{{ job.description }}</p>
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

<style scoped>
.card {
  width: 190px;
  height: 254px;
  background: #3405a3;
  border-radius: 15px;
  box-shadow: 1px 5px 60px 0px #100a886b;
  text-align: center;
  padding: 10px 0;
  margin-bottom: 16px;
}

.card .card-border-top {
  width: 60%;
  height: 3%;
  background: #6b64f3;
  margin: auto;
  border-radius: 0px 0px 15px 15px;
}

.card .img {
  width: 70px;
  height: 80px;
  background: #6b64f3;
  border-radius: 15px;
  margin: 25px auto 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card .img img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 15px;
}

.card span {
  font-weight: 600;
  color: white;
  display: block;
  font-size: 16px;
}

.card .job {
  font-weight: 400;
  color: white;
  font-size: 12px;
  margin-top: 3px;
}

.card button {
  padding: 8px 25px;
  margin-top: 20px;
  border-radius: 8px;
  border: none;
  background: #6b64f3;
  color: white;
  font-weight: 600;
  cursor: pointer;
}

.card button:hover {
  background: #534bf3;
}
</style>
