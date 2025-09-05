<script setup>


// use these if running off unlinked package
// import { useMainStore } from '@phila/pinboard';
// OR
// use this if running off linked package
import { useMainStore } from '../../node_modules/@phila/pinboard/src/stores/MainStore.js';
import { onMounted } from 'vue';

const MainStore = useMainStore();

onMounted(() => {
  console.log('Tutorial component mounted');
  MainStore.firstRouteLoaded = true;
});

</script>

<template>
  <!-- <img :src="`/tutorial/${$route.params.file}`" style="max-width: 100%; height: auto;" /> -->
</template>