<script setup>
  import { ref } from "vue";
  import HomePage from "./components/HomePage.vue";
  import InfoCard from "./components/InfoCard.vue";

  let region = ref(null)
  async function search(zipCode) {
    const res = await fetch(
        `https://app.zipcodebase.com/api/v1/search?apikey=8e133fd0-c905-11ed-ab11-e7c81d1912fb&codes=${zipCode}&country=us`
    );
    region.value = await res.json().then((data) => data.results[zipCode][0]);
    }
  
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
    <HomePage @submit="search" />
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
