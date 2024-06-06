<template>
  <div class="profile">
    <div class="profile-header">
      <img v-if="profileImage" :src="profileImage" alt="Profile Image" class="profile-pic"/>
      <p v-else class="profile-pic-placeholder">No Image Available</p>
      <h1>{{ displayName }}</h1>
      <p class="email">{{ email }}</p>
    </div>
  </div>
</template>

<script>
import { projectAuth } from '../Firebase/config';
import { fetchUser } from '@/composables/useFirestore';

export default {
  name: 'UserProfile',
  data() {
    return {
      user: null,
      userData: null,
      error: null,
      displayName: '', // Initialize with default empty strings and null
      profileImage: null,
      email: ''
    };
  },
  created() {
    this.fetchCurrentUser();
  },
  methods: {
    async fetchCurrentUser() {
      this.user = projectAuth.currentUser;  // This is the currently logged-in user
      if (this.user) {
        try {
          console.log(this.user.uid);
          const userData = await fetchUser(this.user.uid); // fetch the user data from Firestore
          if (userData) { // Check if userData actually exists
            this.displayName = userData.name; // Assuming 'name' is the correct field
            this.email = userData.email; 
            this.profileImage = userData.photoURL; // Assuming 'photoURL' is the correct field
          } else {
            this.error = 'User data not found.';
          }
        } catch (err) {
          this.error = err.message;
          console.error("Error fetching user data:", this.error);
        }
      } else {
        this.error = 'No user is currently logged in.';
      }
    }
  }
};
</script>



<style scoped>
.profile {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 350px;
}

.profile-header {
  text-align: center;
}

.profile-pic {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.profile-pic-placeholder {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  color: #fff;
  font-size: 14px;
}

h1 {
  margin: 10px 0;
}

.email {
  color: #333;
  font-size: 16px;
}
</style>
