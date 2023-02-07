<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />

    <Controle
      iconeBotao="fas fa-play"
      nomeBotao="Play"
      @clicado="iniciar"
      :cronometroRodando="cronometroRodando"
    />

    <Controle
      iconeBotao="fas fa-stop"
      nomeBotao="Stop"
      @clicado="finalizar"
      :cronometroRodando="!cronometroRodando"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Controle from "./Controle.vue";
import Cronometro from "./Cronometro.vue";

export default defineComponent({
    name: "TemporizadorFormulario",
    emits: [
        'aoTemporizadorFinalizado'
    ],
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false
        };
    },
    computed: {
        tempoDecorrido(): string {
            return new Date(this.tempoEmSegundos * 1000).toISOString().substr(11, 8);
        }
    },
    methods: {
        iniciar(): void {
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizar(): void {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    },
    components: { Cronometro, Controle }
});
</script>
