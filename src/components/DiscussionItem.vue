<template>

  <router-link :to="'/Discussion/' + discussion.id" class="discussion-item" >
    <h3 @click="goToDetail">{{ discussion.title }}</h3>

  </router-link> 


</template>

 

<script>

import { doc, deleteDoc } from "firebase/firestore";


 

export default {

  props: {

    discussion: Object

  },

  methods: {

    goToDetail() {

      this.$router.push({ name: 'DiscussionDetail', params: { id: this.discussion.id } });

    },

    editDiscussion() {

      this.$emit('edit', this.discussion);

    },

    async deleteDiscussion() {

      await deleteDoc(doc(db, "discussions", this.discussion.id));

      this.$emit('deleted', this.discussion.id);

    }

  }

};

</script>