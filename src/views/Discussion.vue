<template>
  <div>
    <navBar />
    <br> <br> <br>

    <div class="main-content">
      <DiscussionDetail :DisId="id" />
    </div>
  </div>
</template>

<script>
import DiscussionDetail from '../components/DiscussionDetail.vue'
import navBar from '../components/navBar.vue'

export default {
  name:'Discussion',
  components: { DiscussionDetail, navBar },
  computed: {
    id() {
      return this.$route.params.id; // Accessing the 'id' parameter correctly
    }
  }
}
</script>

<style scoped>
.main-content {
  padding-top: 60px; /* Adjust this value based on the height of your navbar */
}
</style>
