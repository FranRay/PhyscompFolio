<script setup lang="ts">
import InfoCard from './components/InfoCard.vue';
import Button from './components/Button.vue';
// import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="icon-wrapper">
      <img class="icon" src="../src/images/BMOFACE.svg">
    </div>

    <nav class="navigation">
      <a href="" class="nav-link">INFOGRAPHIC</a>
      <a href="" class="nav-link">PROJECT LOGS</a>
      <a href="" class="nav-link">EXPERIMENTS</a>
    </nav>
  </header>

  <div class = "site-container">
    <section class="splash-container">
      <div class="splash-text">
        <h1>PHYSICAL COMPUTING</h1>
        <h3>A portfolio that consists of small physical computing experiments, an infographic, and the final artefact for Experiments Portfolio.</h3>
        <Button>SEE MORE</Button>
      </div>

      <div class="img-container">
        <img class="splash-img" src="../src/images/BMO.svg">
      </div>
    </section>

    <section class="logs-container">
      <h2>RECENT PROJECT LOGS</h2>
      <a class = "viewlink">> View all logs</a> 
      <div class = "logs-scroll">
        <InfoCard v-bind:image="'https://i.pinimg.com/564x/e1/cf/a1/e1cfa1a284fb717a0ef3023d7ee3e924.jpg'">
          <template #head-text>2023-03-27.log</template>
          <template #desc-heading>Log 1: Project Start</template>
          <template #desc-text>Officia sit numquam fugiat sint molestiae id. Est modi est at debitis dolorem. Ut voluptate quod rem dolores sint molestiae maiores. Quaerat consequatur quia libero voluptatem dolores vel. Non rerum esse voluptate voluptatem et aliquam sapiente blanditiis. Voluptates aperiam suscipit.</template>
        </InfoCard>
        <InfoCard v-bind:image="'https://i.pinimg.com/564x/e1/cf/a1/e1cfa1a284fb717a0ef3023d7ee3e924.jpg'">
          <template #head-text>2023-03-27.log</template>
          <template #desc-heading>Log 1: Project Start</template>
          <template #desc-text>Officia sit numquam fugiat sint molestiae id. Est modi est at debitis dolorem. Ut voluptate quod rem dolores sint molestiae maiores. Quaerat consequatur quia libero voluptatem dolores vel. Non rerum esse voluptate voluptatem et aliquam sapiente blanditiis. Voluptates aperiam suscipit.</template>
        </InfoCard>
      </div>
      
    </section>

    <section class = "infographic-container">
      <h2>INFOGRAPHIC: PHYSICAL COMPUTING IN ART</h2>
      <div class = "media-container">
        <div class = "img-container">
          <img src = "../src/images/Title.png">
        </div>
        <div class = "text-container">
          <p>Physical computing has emerged as a promising field for enhancing accessibility and promoting inclusivity for individuals with disabilities.</p>
          <br>
          <p>By integrating computing technologies with physical objects, devices, and systems, physical computing enables novel solutions that empower individuals with disabilities to overcome barriers and participate more fully in various aspects of life.</p>
          <Button class = "info-button">View Infographic</Button>
        </div>
    </div>
    </section>

    <section class="experiments-container">
      <h2>EXPERIMENTS</h2>
      <a class = "viewlink"><p>> View all experiments</p></a>
      <div class = "experiments-display">
        <InfoCard class = "position-card c1" v-bind:image="'https://i.pinimg.com/564x/e1/cf/a1/e1cfa1a284fb717a0ef3023d7ee3e924.jpg'">
          <template #head-text>2023-03-27.log</template>
          <template #desc-heading>Log 1: Project Start</template>
          <template #desc-text>Officia sit numquam fugiat sint molestiae id. Est modi est at debitis dolorem. Ut voluptate quod rem dolores sint molestiae maiores. Quaerat consequatur quia libero voluptatem dolores vel. Non rerum esse voluptate voluptatem et aliquam sapiente blanditiis. Voluptates aperiam suscipit.</template>
        </InfoCard>
        <InfoCard class = "position-card c2" v-bind:image="'https://i.pinimg.com/564x/e1/cf/a1/e1cfa1a284fb717a0ef3023d7ee3e924.jpg'">
          <template #head-text>2023-03-27.log</template>
          <template #desc-heading>Log 1: Project Start</template>
          <template #desc-text>Officia sit numquam fugiat sint molestiae id. Est modi est at debitis dolorem. Ut voluptate quod rem dolores sint molestiae maiores. Quaerat consequatur quia libero voluptatem dolores vel. Non rerum esse voluptate voluptatem et aliquam sapiente blanditiis. Voluptates aperiam suscipit.</template>
        </InfoCard>
      </div>
    </section>

    <section class="footer">
      Designed and developed by Fran Raymundo 2023
    </section>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped lang = "scss">
  // * {
    
  // }

  header {
    position: fixed;
    width: 90%;
    top: 1.5em;
    left: 50%;

    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    flex-direction: row;

    margin-right: auto;
    margin-left: auto;
    padding: 1em;
    border: 4px solid var(--clr-secondary);
    align-items: center;

    .icon-wrapper {
      display: flex;
      align-items: center;
      margin-inline: 1em;
      .icon {
        width: 3em;
        height: auto;
      }
    }

    .navigation {
      .nav-link {
        margin-inline: 1.5em;
        padding: 0.5em;
      }
    }
  }

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

//splash container
.splash-container {
  display: flex;
  flex-direction: row;
  height: 100%;

  .splash-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 50%;
    padding: 8em;
    gap: 1.5em;

    h1 {
      font-size: 4.5em;
      line-height: 1em;
    }

  }

  .img-container {
    display: flex;
    align-items: center;
    justify-items: center;
    width: 50%;
    .splash-img {
      width: 80%;
      height: auto;
      transform: scaleX(-1);
    }
  }
}

//project logs
.logs-container {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-accent);
  padding-inline: 8em;
  padding-block: 3em;
  width: 100%;

 

  

  .logs-scroll {
    display: flex;
    flex-direction: row;
    overflow: auto;
    position: relative;
    margin-top: 1em;
    gap: 7%;

  }
}

.infographic-container {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-primary);
  padding-inline: 8em;
  padding-block: 3em;

  .viewlink {
    width: 100%;
    padding-left: 1em;
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
  }

  .viewlink:hover {
    background-color: var(--clr-accent);
    color: var(--clr-secondary);
  }

  .media-container {
    display: flex;
    flex-direction: row;
    padding-bottom: 2em;

    .img-container {
      display: flex;
      align-items: center;
      width: 50%;

      img {
        height: auto;
        margin-top: 3em;
        margin-inline: auto;
        width: 80%;
      }
    }

    .text-container {
      display: flex;
      flex-direction: column;
      align-content: center;
      justify-content: center;
      width: 50%;

      .info-button {
        margin-top: 2em;
      }
    }
  }
  
}

//experiments container
.experiments-container {
  display: flex;
  flex-direction: column;
  background-color: var(--clr-accent);
  padding-inline: 8em;
  padding-block: 3em;

  .experiments-display {
    display: flex;
    flex-direction: row;
    overflow: auto;
    position: relative;
    margin-top: 1em;
    gap: 7%;
  }
}

.footer {
  display: flex;
  justify-content: center;
  background-color: var(--clr-accent);
  border-top: 4px solid var(--clr-secondary);
  margin-top: auto;
  
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

.logs-scroll::-webkit-scrollbar {
  display: none;
}

h2 {
    font-size: 2.5em;
  }

  .viewlink {
    width: 100%;
    padding-left: 1em;
    color: var(--clr-primary);
    background-color: var(--clr-secondary);
  }

  .viewlink:hover {
    background-color: var(--clr-primary);
    color: var(--clr-secondary);
  }

</style>
