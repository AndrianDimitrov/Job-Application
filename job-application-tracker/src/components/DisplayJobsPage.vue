<template>
  <div class="container">
    <h1 class="title">Job Applications</h1>

    <!-- Section for all jobs -->
    <section v-if="jobs.length > 0" class="jobs-grid">
      <JobApplicationCard
        v-for="job in jobs"
        :key="job.id"
        :job="job"
        :isFavorite="favorites.includes(job.id)"
        @delete-job="handleDeleteJob"
        @toggle-favorite="handleToggleFavorite"
      />
    </section>
    <p v-else class="empty-text">No job applications found.</p>

    <!-- Section for favorite jobs -->
    <h2 class="title">Favorite Jobs</h2>
    <section v-if="favoriteJobs.length > 0" class="favorites-grid">
      <JobApplicationCard
        v-for="job in favoriteJobs"
        :key="job.id"
        :job="job"
        :isFavorite="true"
        @delete-job="handleDeleteJob"
        @toggle-favorite="handleToggleFavorite"
      />
    </section>
    <p v-else class="empty-text">No favorite jobs found.</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import JobApplicationCard from './JobApplicationCard.vue';

const jobs = ref([]);
const favorites = ref([]);

onMounted(() => {
  const localJobs = JSON.parse(localStorage.getItem('jobs') || '[]');
  const localFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  jobs.value = localJobs;
  favorites.value = localFavorites;
});

// Delete job handler
const handleDeleteJob = (id) => {
  jobs.value = jobs.value.filter((job) => job.id !== id);
  favorites.value = favorites.value.filter((favId) => favId !== id);
  localStorage.setItem('jobs', JSON.stringify(jobs.value));
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

// Toggle favorite handler
const handleToggleFavorite = (id) => {
  if (favorites.value.includes(id)) {
    favorites.value = favorites.value.filter((favId) => favId !== id);
  } else {
    favorites.value.push(id);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites.value));
};

const favoriteJobs = computed(() =>
  jobs.value.filter((job) => favorites.value.includes(job.id))
);
</script>

<style scoped>
/* Container styling */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
  background-color: #f9f9f9;
}

/* Title styling */
.title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin: 30px 0 20px;
  color: #444;
}

/* Jobs Grid */
.jobs-grid,
.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 40px;
}

/* Empty text */
.empty-text {
  text-align: center;
  font-size: 1.2rem;
  color: #888;
  margin: 20px 0;
}
</style>
