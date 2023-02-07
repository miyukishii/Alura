<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema"/>
    </div>

    <div class="column is-three-quarter conteudo">
      <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />

      <div class="list">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />

        <CardTarefa v-if="listaVazia">
          Você não realizou nenhuma tarefa ainda :(
        </CardTarefa>
      </div>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioTarefa from './components/Formulario.vue';
import Tarefa from './components/Tarefa.vue';
import ITarefa from '@/interfaces/ITarefas';
import CardTarefa from './components/CardTarefa.vue';

export default defineComponent({
    name: "App",
    components: { BarraLateral, FormularioTarefa, Tarefa, CardTarefa },
    data () {
      return {
        tarefas: [] as ITarefa[],
        modoEscuroAtivo: false,
      }
    },
    methods: {
      salvarTarefa (tarefa: ITarefa): void {
        this.tarefas.push(tarefa);
      },
      trocarTema (modoEscuroAtivo: boolean): void {
        this.modoEscuroAtivo = modoEscuroAtivo;
      }
    },
    computed: {
      listaVazia (): boolean {
        return this.tarefas.length === 0;
      }
    },
});
</script>

<style>
  .list {
    padding: 1.25rem;
  }
  main {
    --bg-primario: #fff;
    --texto-primario: #000;
  }
  main.modo-escuro {
    --bg-primario: #2b2d42;
    --texto-primario: #ddd;
  }
  .conteudo {
    background-color: var(--bg-primario);
  }
</style>
