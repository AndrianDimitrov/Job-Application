<template>
  <div>
    <nav>
      <router-link to="/add-job">Add Job</router-link>
      <router-link to="/display-jobs">View Jobs</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style>
nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: blue;
}

nav a:hover {
  text-decoration: underline;
}
</style>
