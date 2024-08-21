<template>
    <div class="products-container bg-logo-cream py-12">
      <h2 class="text-4xl font-extrabold text-center mb-10 text-logo-brown">Our Products</h2>
      <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        <div v-for="product in products" :key="product.id" class="product-card bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img :src="product.imageUrl" alt="Product Image" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="text-2xl font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600">{{ product.description }}</p>
            <button class="mt-2 px-4 py-2 text-white bg-logo-brown rounded hover:bg-logo-dark-green transition-colors duration-300 text-sm">View More</button>

          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'products',
    data() {
      return {
        products: [
        {
          id: 1,
            name: 'Oakoffee Ice Cream',
            description: 'A delightful blend of coffee and oak flavors in a smooth ice cream, perfect for dessert lovers.',
            imageUrl: require('@/assets/cfi.jpg') // Add the appropriate image path
          },
          


          {
            id: 2,
            name: 'Oakoffee Cold Brew',
            description: 'A refreshing cold brew steeped with Oakoffee, perfect for hot summer days.',
            imageUrl: require('@/assets/ccb.jpg') // Add the appropriate image path
          },
          {
            id: 3,
            name: 'Oak Latte Cream',
            description: 'A creamy latte made from Oakoffee, offering a smooth, velvety texture and a hint of vanilla.',
            imageUrl: require('@/assets/lc.jpeg')
          },
          {
            id: 4,
            name: 'Oakoffee Bar',
            description: 'Energy bars infused with Oakoffee, perfect for a quick breakfast or an energizing snack.',
            imageUrl: require('@/assets/cfb.jpg')
          },
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .products-container {
    background-color: #f5f5f5;
    padding: 3rem 0;
  }
  
  .product-card {
    background-color: #fff;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: box-shadow 0.3s;
  }
  
  .product-card:hover {
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  }
  
  .product-card img {
    width: 100%;
    height: 12rem;
    object-fit: cover;
  }
  
  .product-card h3 {
    color: #333;
  }
  
  .product-card p {
    color: #666;
  }
  </style>
  