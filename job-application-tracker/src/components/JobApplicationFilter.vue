<template>
    <input
      v-model="query"
      type="text"
      placeholder="Filter by job name"
      @input="updateFilter"
    />
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { defineEmits } from 'vue';
  
  const query = ref('');
  const emit = defineEmits(['filter-jobs']);
  
  const updateFilter = () => {
    emit('filter-jobs', query.value);
  };
  </script>
  
  <style>
  input {
    margin-bottom: 20px;
    display: block;
  }
  </style>
  