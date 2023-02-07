<template>
  <header>
    <h1>
        <img src="../assets/alura-tracker-logo.png" alt="Alura Tracker Logo" />
    </h1>

    <button class="button" @click="alterarTema">
      {{ textoDoBotao }}
    </button>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "BarraLateral",
  emits: ['aoTemaAlterado'],
  data () {
    return {
      modoEscuroAtivo: false,
    }
  },
  methods: {
    alterarTema (): void {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo);
    }
  },
  computed: {
    textoDoBotao (): string {
      if (this.modoEscuroAtivo) {
        return 'Desativar modo escuro';
      }
      return 'Ativar modo escuro'
    }
  }
})
</script>

<style scoped>
  header {
    background-color: #0d3b66;
    padding: 1rem;
    width: 100%;
    height: 100vh;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    header {
      padding: 2.5rem;
      height: auto;
    }
  }
</style>