<template>
  <FormularioTarefa @aoSalvarTarefa="salvarTarefa" />

  <div class="list">
    <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />

    <CardTarefa v-if="listaVazia">
      Você não realizou nenhuma tarefa ainda :(
    </CardTarefa>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioTarefa from "@/components/Formulario.vue";
import Tarefa from "@/components/Tarefa.vue";
import ITarefa from "@/interfaces/ITarefas";
import CardTarefa from "@/components/CardTarefa.vue";

export default defineComponent({
  name: "App",
  components: { FormularioTarefa, Tarefa, CardTarefa },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa): void {
      this.tarefas.push(tarefa);
    },
  },
  computed: {
    listaVazia(): boolean {
      return this.tarefas.length === 0;
    },
  },
});
</script>

