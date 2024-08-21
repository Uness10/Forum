<template>
  <div class="min-h-screen bg-logo-cream text-logo-brown">
    <!-- Header -->
    <header class="bg-logo-dark-green shadow-lg">
      <div class="max-w-7xl mx-auto flex justify-between items-center ">
        <a href="#" class="logo flex items-center  bg-logo-cream">
          <img src="@/assets/logo.png" alt="OAKOFFEE Logo" class="h-14 md:h-20 transition-transform duration-300 hover:scale-110">
        </a>
        <nav class="hidden md:flex ">
          <ul class="flex space-x-6 text-logo-cream">
            <li><router-link to="/" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Home</router-link></li>

            <li><router-link to="/products" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Products</router-link></li>
            <li><router-link to="/about" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">About</router-link></li>

            <li><a href="mailto:oakoffee@gmail.com?subject=Inquiry%20from%20website&body=Hello%2C%20I%20would%20like%20to%20inquire%20about..." class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Contact Us</a></li>
          </ul>   
          
        </nav>
        <button @click="toggleMenu" class="md:hidden text-logo-cream focus:outline-none mr-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        
      </div>
      <div v-if="isMenuOpen" class="md:hidden mt-4 bg-logo-dark-green p-4 rounded shadow-lg">
        <ul class="flex flex-col space-y-2 text-logo-cream">
          <li><a href="#" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Home</a></li>
          <li><a href="#products" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Products</a></li>
          <li><a href="#about" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">About</a></li>

          <li><a href="#contact" class="nav-link py-2 px-4 rounded hover:bg-logo-brown hover:text-logo-dark-green transition-colors">Contact</a></li>
        </ul>
      </div>
    </header>

    <!-- Main Content -->

    <RouterView/>
<!-- Footer -->
<footer class="bg-logo-dark-green text-logo-cream p-6 text-center flex justify-center items-center space-x-4">
    <p>OAKOFFEE &copy; 2024</p>
    <a href="https://www.instagram.com/oakoffee_?igsh=MXJoMDU1cmlrdWdw&utm_source=qr" target="_blank" class="ig-icon">
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 24 24">
            <path d="M7.75 2h8.5C19.994 2 22 4.006 22 6.75v8.5c0 2.744-2.006 4.75-4.75 4.75h-8.5C4.007 20 2 17.994 2 15.25v-8.5C2 4.006 4.007 2 7.75 2zm0 1.5A3.25 3.25 0 0 0 4.5 6.75v8.5c0 1.8 1.45 3.25 3.25 3.25h8.5A3.25 3.25 0 0 0 19.5 15.25v-8.5a 3.25 3.25 0 0 0-3.25-3.25h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a 3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-3a.75.75 0 1 1 0 1.5.75.75 0 0 1 0-1.5z"/>
        </svg>
    </a>
</footer>

  </div>
</template>


<script>
export default {
  name: 'App',
  data() {
    return {
      currentFeatureIndex: 0,

      currentIndex: 0,
      packs: [
        { id: 1, title: 'Starter Pack', contents: 'Your best starting point!', price: '19 dhs ', image: 'stp.jpeg' },
        { id: 2, title: 'Family Pack', contents: 'Perfect for families.', price: '59 dhs', image: 'fp.jpeg' },
        { id: 3, title: 'Enthusiast Pack', contents: 'The GOAT Offer!', price: '39 dhs', image: 'ep.jpeg' }
      ],
      isMenuOpen: false,
      interval: null,  // To store the interval ID for automatic swiping
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    nextFeature() {
    if (this.currentFeatureIndex < 2) { // Adjust this number based on total features
      this.currentFeatureIndex++;
    } else {
      this.currentFeatureIndex = 0;
    }
  },
  prevFeature() {
    if (this.currentFeatureIndex > 0) {
      this.currentFeatureIndex--;
    } else {
      this.currentFeatureIndex = 2; // Adjust this number based on total features
    }
  },
    nextSlide() {
      if (this.currentIndex < this.packs.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.packs.length - 1;
      }
    },
    startAutoSlide() {
      // Clear any existing interval to avoid duplicates
      if (this.interval) clearInterval(this.interval);

      // Set interval for automatic sliding every 3 seconds
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      // Stop automatic sliding by clearing the interval
      clearInterval(this.interval);
    }
  },
  mounted() {
    // Start automatic sliding when the component is mounted
    this.startAutoSlide();
  },
  beforeDestroy() {
    // Clear interval when the component is destroyed to avoid memory leaks
    this.stopAutoSlide();
  }
}
</script>

<style scoped>
.feature-card {
  position: relative;
  height: 320px;
  width: 280px;
  overflow: hidden;
  border-radius: 12px;
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.title-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  transition: opacity 0.3s ease-in-out;
}

.details-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  padding: 20px;
}

.feature-card:hover .details-overlay {
  opacity: 1;
}

.feature-card:hover .title-overlay {
  opacity: 0;
}

.feature-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease-in-out;
}

.feature-card:hover {
  transform: scale(1.05);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.4);
}
.relative {
  overflow: hidden;
}
.flex {
  transition: transform 0.5s ease-in-out;
}
.min-w-full {
  width: 100%;
}
/* Footer styles */
.footer {
    background-color: #355E3B; /* Dark green, assumed as the brand color */
    color: #F4F4F9; /* Cream color, for contrast */
    padding: 20px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
}

.footer p {
    margin: 0;
    font-size: 18px;
}

.ig-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff; /* White background for the SVG icon */
    border-radius: 50%;
    padding: 8px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.ig-icon:hover {
    background-color: #F4F4F9; /* Lighter shade for hover */
    transform: scale(1.1); /* Slightly enlarge the icon on hover */
    cursor: pointer;
}

.ig-icon svg {
    height: 24px;
    width: 24px;
    fill: #355E3B; /* SVG icon color, matching the footer background */
}

</style>


