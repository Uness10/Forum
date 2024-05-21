<template>

  <router-link :to="'/Discussion/' + discussion.id" class="discussion-item" >
    <h3 @click="goToDetail">{{ discussion.title }}</h3>

  </router-link> 


</template>

 

<script>



 

export default {

  props: {

    discussion: Object

  },

  methods: {

    goToDetail() {

      this.$router.push({ name: 'DiscussionDetail', params: { id: this.discussion.id } });

    }

  }

};

</script>