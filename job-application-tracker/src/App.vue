<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav class="navbar">
      <div class="nav-links">
        <router-link to="/add-job" class="nav-link">Add Job</router-link>
        <router-link to="/display-jobs" class="nav-link">View Jobs</router-link>
      </div>
    </nav>

    <!-- Router View to Render Pages -->
    <main class="content">
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped>
/* Main App Container */
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  background-color: #f9f9fb;
  min-height: 100vh;
}

/* Navigation Bar Styling */
.navbar {
  background-color: #6b64f3; /* Modern background color */
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}

/* Navigation Links */
.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: color 0.3s, transform 0.2s;
}

.nav-link:hover {
  color: #ffcc70;
  transform: scale(1.05);
}

/* Highlight Active Link */
.nav-link.router-link-active {
  color: #ffcc70;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
}

/* Main Content */
.content {
  margin-top: 60px; /* Push content below the fixed navbar */
  padding: 20px;
}
</style>
