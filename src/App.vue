<script setup>
  import { ref } from "vue";
  import HomePage from "./components/HomePage.vue";
  import InfoCard from "./components/InfoCard.vue";

  let region = ref(null)
</script>

<template>
  <header>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">zip-code</a>
        <span class="navbar-text"> Welcome to zip-code finder </span>
      </div>
    </nav>
  </header>

  <main>
    <HomePage @submit="responseValue => {
      region = responseValue;

      }" />
    <InfoCard v-if="region" :rgn="region"/>
  </main>
</template>

<style scoped>
header {
  margin-bottom: 20px;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
