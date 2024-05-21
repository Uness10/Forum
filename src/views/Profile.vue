<template>
    <navBar/>
<br> <br> <br>
    <div>
        {{ infos.Dname }}
        {{ infos.email }}
    </div>
</template>






<script>
import { mapGetters } from 'vuex';
import { projectFirestore } from '../Firebase/config'; // Import the projectFirestore
import { ref } from 'vue'; // Import ref from Vue
import navBar from '../components/navBar.vue'


export default {
  name: 'Profile',
  components : {navBar},
  computed: {
    ...mapGetters(['User']),
  },
  data() {
    return {
        infos:[]
    }
  },
  methods: {
    async fetchDisId(desiredPostId) {
      const disc = ref(null);
      const error = ref(null);
      try {
        let res = await projectFirestore.collection('User').doc(desiredPostId).get();

        if (!res.exists) {
          throw Error('That post does not exist');
        }
        this.infos = res.data();
      } catch (err) {
        error.value = err.message;
      }
    },
    async searchUserByProperty(propertyName, propertyValue) {
      try {
        // Perform a query to search for the user
        const querySnapshot = await projectFirestore.collection('User')
          .where(propertyName, '==', propertyValue)
          .get();

        // Check if any documents match the query
        if (querySnapshot.empty) {
          // No matching documents found
          return null;
        }

        // Retrieve the first matching document
        const userDoc = querySnapshot.docs[0].data();

        // Optionally, you can return the document ID along with the data
        const userId = querySnapshot.docs[0].id;

        // Return the user data (and optionally the user ID)
        return { id: userId, ...userDoc };
      } catch (error) {
        // Handle any errors
        console.error('Error searching for user:', error);
        return null;
      }
    },
  },
  mounted() {
    const propertyName = 'email'; // Property to search by
    const propertyValue = this.User.email; // Value to search for

    this.searchUserByProperty(propertyName, propertyValue)
      .then(user => {
        this.infos = user
      });
  },
};
</script>
