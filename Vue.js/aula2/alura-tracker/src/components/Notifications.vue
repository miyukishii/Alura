<template>
  <div class="notification">
    <article
      class="message"
      :class="contexto[notificacao.type]"
      v-for="notificacao in notificacoes"
      :key="notificacao.id"
    >
      <div class="message-header">
        <p>{{notificacao.title}}</p>
      </div>

      <div class="message-body">{{notificacao.text}}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { TipoNotificacao } from "@/interfaces/INotification";

export default defineComponent({
  name: "NotificationsMessage",
  data () {
    return {
      contexto: {
        [TipoNotificacao.SUCESSO]: 'is-success',
        [TipoNotificacao.ATENCAO]: 'is-warning',
        [TipoNotificacao.FALHA]: 'is-danger',
      }
    }
  },
  setup() {
    const store = useStore();
    return {
      notificacoes: computed(() => store.state.notificacoes),
    };
  },
});
</script>

<style scoped>
.notification {
  background-color: transparent;
  padding: 8px;
  position: absolute;
  right: 0;
  width: 300px;
  z-index: 105;
}
</style>
