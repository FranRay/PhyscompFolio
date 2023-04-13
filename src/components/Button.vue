<script setup lang="ts">
    // Variables passed to this component are props
    const props = defineProps({
        alignment: {
            type: String,
            default: 'left'
        }
    })
</script>

<!-- Template with defined slots -->
<!-- Currently, content by default goes to the one without a name -->
<!-- Slot 'Icon' has no implementation yet -->
<template lang="">
    <div class="text-button" :class="alignment">
        <slot class="text">
            
        </slot>
    </div>
</template>

<!-- Scoped Styling -->
<style scoped lang="scss">
    .text-button {
        color: var(--clr-secondary);
        padding: 1em;
        padding-inline: 2em;
        width: fit-content;
        position: relative;
        border: 4px solid var(--clr-secondary);
        max-width: 50ch;
        word-wrap: break-word;
        transition: 0.4s;
    }

    .text-button:hover {
        color: var(--clr-primary);
        background-color: var(--clr-secondary);
    }
</style>