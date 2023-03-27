<template>
    <label v-for="(item, index) in items" :key="index">
        <input type="checkbox" :value="item" v-model="selectedItems"> {{ item }}
    </label>
    <p>Selected Items: {{ selectedItems.join(', ') }}</p>
</template>

<script setup>
import { ref } from 'vue'

const items = ['aaa', 'bbb', 'ccc', 'ddd', 'NA'];
const selectedItems = ref([]);

const answerString = "aaa, ccc, NA";
selectedItems.value = answerString.split(',').map(item => item.trim())
</script>