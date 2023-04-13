<script setup lang = "ts">
    import Navigation from '@/components/Navigation.vue';
</script>


<template>
    <Navigation></Navigation>
    <div class="site-container">
        <section class = "infographic-container">
            <h1>INCLUSIVE INNOVATION:</h1>
            <h2>Advancing Accessibility with Physical Computing</h2>
            <p>Hello world</p>
            <!-- <img class = "infographic-image" src="../images/Infographic.png"> -->
        </section>
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

  .infographic-container {
    display: flex;
    flex-direction: column;
    margin: 2em;

    @include media(tablet) {
        margin: 4em;
    }

    @include media (laptop) {
        margin: 5em;
    }

    h1 {
        margin-left: -0.15em;
    }
    h2 {
        margin-top: -0.5em;
    }

    p {
        margin-block: 1em;
    }

    .infographic-image {
        margin-block: 2em;
        border: 2px solid var(--clr-secondary);
    }
  }
</style>