<template>
  <div class="app-container">
    <!-- Sidebar navigation -->
    <div class="sidebar">
      <router-link to="/words" class="item">
        <i class="list icon"></i>Words
      </router-link>
      <router-link to="/words/new" class="item">
        <i class="plus icon"></i>New
      </router-link>
      <router-link to="/words/search" class="item">
        <i class="search icon"></i>Search
      </router-link>
    </div>

    <!-- Main content area -->
    <div class="main-content">
      <div class="content">
        <router-view />
        <flash-message></flash-message>
      </div>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="ui container">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>

/* Overall container to manage layout */
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
}


.main-content {
  display: flex;
  flex: 1;
  background-color: #302f63;
}

/* Sidebar navigation styling */
.sidebar {
  background-color: #333;
  color: white;
  width: 200px; 
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100vh; 
  position: fixed; 
  top: 0;
  left: 0;
}

/* Sidebar item styling */
.sidebar .item {
  font-size: 1.5em; 
  padding: 1em; 
  color: white;
  text-align: center;
  text-decoration: none; 
}

.sidebar .item:hover {
  background-color: #555; 
}

/* Main content area styling */
.content {
  flex: 1;
  padding: 2em;
  margin-left: 250px; 
  background-color: #302f63; 
}

/* Footer styling */
.footer {
  background-color: #473433;
  color: white;
  padding: 1em;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>