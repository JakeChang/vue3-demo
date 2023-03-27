<template>
    <input type="text" placeholder="Name" v-model="name">
    <p v-if="!name">Please fill out this field.</p>
    <p>
        {{ name }}
    </p>
</template>
  
<script>
import { ref } from 'vue'

export default {
    setup() {
        const name = ref('')

        return {
            name,
        }
    }
}
</script>