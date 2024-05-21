<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/Profile" class="nav-link" active-class="active-link">
        <i class="fas fa-user"></i> Profile
      </router-link>

      <router-link to="/Home" class="nav-link" active-class="active-link">
        <i class="fas fa-comments"></i> Discussions
      </router-link>
      <router-link to="/Categories" class="nav-link" active-class="active-link">
        <i class="fas fa-th-list"></i> Categories
      </router-link>
      <router-link to="/CreateDiscussion" class="nav-link" active-class="active-link">
        <i class="fas fa-plus-circle"></i> Create Discussion
      </router-link>
      <router-link to="/Logout" class="nav-link" active-class="active-link">
        <i class="fas fa-sign-out-alt"></i> Logout
      </router-link>
    </div>
  </nav>
  <router-view/>
</template>

<script>
export default {
  name: 'navBar',
  props: {}
}
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.navbar {
  background: linear-gradient(130deg, #0a1a4f, #3757c1);
  width: 100%;
  height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  justify-content: space-between;
  padding: 0 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  padding: 10px 15px;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  font-size: 16px;
  margin: 0 10px;
  border-radius: 5px;
}

.nav-link i {
  margin-right: 8px;
}

.nav-link:hover,
.active-link {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffd700;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .nav-link {
    font-size: 14px;
    margin: 5px 0;
    padding: 8px 10px;
  }
}
</style>
