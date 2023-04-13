<template>
  <header>
    <div class="icon-wrapper">
      <RouterLink to="/" class="rlink"><img class="icon" src="../images/BMOFACE.svg"></RouterLink>
    </div>

    <nav class="navigation">
      <a class="nav-link"><RouterLink to="/infographic">INFOGRAPHIC</RouterLink></a>
      <!-- <a href="/project-logs" class="nav-link"><RouterLink to="/infographic">PROJECT LOGS</RouterLink></a> -->
      <!-- <a href="/experiments" class="nav-link"><RouterLink to="/infographic">EXPERIMENTS</RouterLink></a> -->
    </nav>
  </header>
</template>

<style scoped lang = "scss">
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
      display: none;

      @include media(tablet){
        display: inline-block;
      }

      .nav-link {
        margin-inline: 1.5em;
        padding: 0.5em;
      }
    }
  }
</style>