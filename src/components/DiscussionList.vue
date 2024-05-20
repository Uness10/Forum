<template>
  <div v-for="item in discussions" :key="item.id">
    <DiscussionItem :discussion='item'/>
    
  </div>

</template>
  
  <script>
import {fetchDis} from '../composables/useFirestore.js'
import DiscussionItem from '../components/DiscussionItem.vue'



  export default {
    name: 'DiscussionList',
    components:{
      DiscussionItem
    },
    data() {
      return {
        currentPage: 1,
        perPage: 10,
        discussions:[]
      };
    },
    async mounted() {
      this.discussions = await fetchDis()
      console.log(this.discussions);
    },
  };
  </script>
  