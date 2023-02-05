<script setup lang="ts">

const { refreshSessionContext } = useSessionContext();

onMounted(() => {
  refreshSessionContext();
});

</script>

<template>
  <div id="app" class="flex justify-center">
    <div class="grid grid-cols-2 gap-5 max-w-screen-md">
      <ProductCardModified />
      <Cart />
    </div>
  </div>
</template>