<template>
  <form @submit.prevent="submitForm">
    <div class="form-group">
      <label for="name">Job Name:</label>
      <input v-model="name" type="text" id="name" placeholder="Enter job name" required />
    </div>

    <div class="form-group">
      <label for="imageSrc">Image URL:</label>
      <input v-model="imageSrc" type="text" id="imageSrc" placeholder="Enter image URL" required />
    </div>

    <div class="form-group">
      <label for="description">Description:</label>
      <textarea
        v-model="description"
        id="description"
        placeholder="Enter job description"
        required
      ></textarea>
    </div>

    <button type="submit" class="btn-submit">Add Job</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';
import { defineEmits } from 'vue';

const name = ref('');
const imageSrc = ref('');
const description = ref('');
const emit = defineEmits(['add-job']);

const submitForm = () => {
  if (name.value && imageSrc.value && description.value) {
    const newJob = {
      id: Date.now(),
      name: name.value,
      imageSrc: imageSrc.value,
      description: description.value,
    };
    emit('add-job', newJob); // Emit the new job to the parent component
    name.value = '';
    imageSrc.value = '';
    description.value = '';
  }
};
</script>

<style scoped>
form {
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

.btn-submit {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-submit:hover {
  background-color: #0056b3;
}
</style>
