import Cronometro from './components/Cronometro.vue';

<template>
  <CardTarefa>
    <div class="columns">
      <div class="column is-7">{{ tarefa.descricao || 'Tarefa sem descrição' }}</div>

      <div class="column tempo">
        <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </CardTarefa>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Cronometro from "./Cronometro.vue";
import ITarefa from "@/interfaces/ITarefas";
import CardTarefa from "./CardTarefa.vue";

export default defineComponent({
  name: "TarefaFormulario",
  components: { Cronometro, CardTarefa },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>

