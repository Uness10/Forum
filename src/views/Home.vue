<template>
      <div class="flex-grow">
      <section class="bg-logo-brown ">
        <h2 class="text-4xl font-extrabold text-center mb-10 text-logo-brown bg-logo-cream py-12 px-8  shadow-lg relative overflow-hidden">
          <span class="block relative z-10">Oakoffee, The Natural Alternative to Traditional Coffee!</span>
          <span class="absolute inset-0 bg-white opacity-70 mix-blend-multiply"></span>
        </h2>

        <div class="max-w-2xl mx-auto overflow-hidden relative">

          <div 
            class="flex transition-transform duration-500 ease-in-out"
            :style="{ transform: `translateX(-${currentFeatureIndex * 100}%)` }"
          >
            <!-- Feature Cards -->
            <div class="feature-card min-w-full" :style="{ backgroundImage: `url(${require('@/assets/ok.jpeg')})` }">
              <div class="title-overlay">
                <h2 class="font-bold text-lg">Natural Ingredients</h2>
              </div>
              <div class="details-overlay">
                <p class="text-sm">Experience the best of nature with OAKOFFEE.</p>
                <button class="mt-2 px-4 py-2 text-white rounded hover:bg-yellow-500 transition-colors duration-300 text-sm">Learn More</button>
              </div>
            </div>
            <div class="feature-card min-w-full" :style="{ backgroundImage: `url(${require('@/assets/bl2.jpeg')})` }">
              <div class="title-overlay">
                <h2 class="font-bold text-lg">Health Benefits</h2>
              </div>
              <div class="details-overlay">
                <p class="text-sm">Enjoy a healthy, stimulating drink without caffeine.</p>
                <button class="mt-2 px-4 py-2 text-white rounded hover:bg-yellow-500 transition-colors duration-300 text-sm">Learn More</button>
              </div>
            </div>
            <div class="feature-card min-w-full" :style="{ backgroundImage: `url(${require('@/assets/bl1.jpeg')})` }">
              <div class="title-overlay">
                <h2 class="font-bold text-lg">Locally Produced</h2>
              </div>
              <div class="details-overlay">
                <p class="text-sm">Support local businesses and sustainable practices.</p>
                <button class="mt-2 px-4 py-2 text-white rounded hover:bg-yellow-500 transition-colors duration-300 text-sm">Learn More</button>
              </div>
            </div>
          </div>

          <!-- Navigation Buttons -->
          <button @click="prevFeature" class="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2  bg-transparent-200  text-logo-cream rounded-full hover:bg-logo-dark-green transition-colors duration-300">
            &larr;
          </button>
          <button @click="nextFeature" class="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent-200  text-logo-cream rounded-full hover:bg-logo-dark-green transition-colors duration-300">
            &rarr;
          </button>
        </div>
      </section>

      <section class="bg-logo-brown py-12">
        <h2 class="text-4xl font-extrabold text-center mb-10 text-logo-dark-green bg-logo-cream py-12 px-8  shadow-lg relative overflow-hidden">
          <span class="block relative z-10">Special Pack Offers</span>
          <span class="absolute inset-0 bg-white opacity-70 mix-blend-multiply"></span>
        </h2>
        <div class="max-w-3xl mx-auto text-center px-4 ">

          <div class="relative overflow-hidden max-w-3xl mx-auto">
            <div 
              class="flex transition-transform duration-500 ease-in-out"
              :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
            >
              <div 
                v-for="(pack, index) in packs" 
                :key="pack.title" 
                class="min-w-full flex-shrink-0 px-4"
              >
                <div class="relative bg-white rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 overflow-hidden">
                  <!-- Background image with dark overlay -->
                  <div 
                    class="absolute inset-0 bg-cover bg-center transition-opacity duration-300" 
                    :style="{ backgroundImage: `url(${require('@/assets/' + pack.image)})` }"
                  ></div>

                  <!-- Dark overlay with hover effect -->
                  <div class="absolute inset-0 bg-black opacity-40 hover:opacity-60 transition-opacity duration-300"></div>

                  <!-- Text content over the image -->
                  <div class="relative z-10 p-8">
                    <h3 class="text-2xl font-semibold text-logo-cream mb-3">{{ pack.title }}</h3>
                    <p class="text-logo-cream mb-6">{{ pack.contents }}</p>
                    <span class="block text-2xl font-bold text-logo-cream mb-4">{{ pack.price }}</span>
                    <button 
                      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 px-6 py-2  text-logo-cream rounded-full hover:bg-yellow-500 hover:text-logo-cream transition-colors duration-300"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <button 
              @click="prevSlide" 
              class="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent-200 text-logo-cream rounded-full hover:bg-logo-dark-green transition-colors duration-300"
            >
              &larr;
            </button>
            <button 
              @click="nextSlide" 
              class="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-transparent-200 text-logo-cream rounded-full hover:bg-logo-dark-green transition-colors duration-300"
            >
              &rarr;
            </button>
          </div>
        </div>
      </section>

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
</style>
