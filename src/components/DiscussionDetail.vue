<template>
    <div>
        {{ item }}
        
    </div>
</template>
<script>
import { fetchDisId } from '../composables/useFirestore.js'



export default {
    props:{
        DisId:String
    },
    data() {
        return {
            item:{}
        }
    },
    
    async mounted() {
        this.item = await fetchDisId(DisId)
    },
}
</script>