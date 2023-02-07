<template>
  <header>
    <h1>
        <img src="../assets/alura-tracker-logo.png" alt="Alura Tracker Logo" />
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BarraLateral"
})
</script>

<style scoped>
  header {
    background-color: #0d3b66;
    padding: 1rem;
    width: 100%;
    height: 100vh;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>