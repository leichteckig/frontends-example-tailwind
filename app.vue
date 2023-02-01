<script setup lang="ts">
import Listing from "~/components/Listing.vue";
const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});
</script>

<template>
  <div id="app">
    <Listing />
  </div>
</template>
<style>
/*@import "./style.css";*/
</style>
