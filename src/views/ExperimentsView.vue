<script setup lang = "ts">
    import Navigation from '@/components/Navigation.vue';
</script>


<template>
    <Navigation></Navigation>
    <div class="site-container">
        
    </div>
</template>

<style scoped lang = "scss">
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

.site-container::-webkit-scrollbar {
    width: 1.2em;
}
 
.site-container::-webkit-scrollbar-thumb {
    background: var(--clr-secondary);
    border-left: 4px solid var(--clr-secondary);
}

.site-container::-webkit-scrollbar-track {
    background: var(--clr-primary);
    border-left: 4px solid var(--clr-secondary);
}

</style>