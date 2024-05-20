<template>
  <DiscussionDetail :DisId="id" />
</template>
  
<script>
import DiscussionDetail from '../components/DiscussionDetail.vue'

export default {
  components: { DiscussionDetail },
  computed: {
    id() {
      return this.$route.params.id; // Accessing the 'id' parameter correctly
    }
  }
}
</script>
