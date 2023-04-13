<script setup lang = "ts">
    import Navigation from '@/components/Navigation.vue';
</script>


<template>
    <Navigation></Navigation>
    <div class="site-container">
        
    </div>
</template>

<style scoped lang = "scss">
  //site container
  .site-container {
    display: block;
    top: 6em;
    overflow-y: scroll;
    width: 90%;
    height: 85vh;
    margin-right: auto;
    margin-left: auto;
    border: 4px solid var(--clr-secondary); 
  }
</style>