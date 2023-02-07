<template>
  <button class="button" @click="clicado" :disabled="cronometroRodando">
    <span class="icon">
      <i :class='iconeBotao'></i>
    </span>
    <span>{{ nomeBotao }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ControleTemporizador",
  emits: ["clicado"],
  props: {
    cronometroRodando: {
      type: Boolean,
      required: true
    },
    nomeBotao: {
      type: String,
      required: true
    },
    iconeBotao: {
      type: String,
      required: true
    },
  },
  methods: {
    clicado(): void {
      this.$emit('clicado');
    },
  },
});
</script>
