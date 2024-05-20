<template>
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo-container">
          <i class="fas fa-user-circle logo"></i>
        </div>
        <router-link to="/Dashboard" class="nav-link" active-class="active-link">
          <i class="fas fa-tachometer-alt"></i> Dashboard
        </router-link>
        <router-link to="/Myresumees" class="nav-link" active-class="active-link">
          <i class="fas fa-file-alt"></i> My Resumees
        </router-link>
        <router-link to="/Settings" class="nav-link" active-class="active-link">
          <i class="fas fa-cog"></i> Settings
        </router-link>
        <router-link to="/About" class="nav-link" active-class="active-link">
          <i class="fas fa-info-circle"></i> About
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
    width: 250px;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  }
  
  .nav-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .logo-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .logo {
    font-size: 3rem;
    color: #fff;
  }
  
  .nav-link {
    color: #fff;
    text-decoration: none;
    padding: 15px 30px;
    transition: all 0.3s;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    font-size: 16px;
  }
  
  .nav-link i {
    margin-right: 10px;
  }
  
  .nav-link:hover,
  .active-link {
    background-color: rgba(255, 255, 255, 0.2);
    color: #ffd700;
    padding-left: 40px;
  }
  
  @media (max-width: 768px) {
    .navbar {
      width: 100%;
      height: auto;
      position: relative;
    }
  
    .nav-container {
      flex-direction: row;
      justify-content: space-around;
    }
  
    .nav-link {
      width: auto;
      margin-bottom: 10px;
    }
  }
  </style>
  