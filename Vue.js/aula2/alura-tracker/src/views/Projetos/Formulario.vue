<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>

        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>

      <button class="button" type="submit">Salvar</button>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { CADASTRAR_PROJETOS, ALTERAR_PROJETOS } from "@/store/actions-types";
import { TipoNotificacao } from "@/interfaces/INotification";
// import { notificacaoMixin } from '@/mixins/notificar';
import useNotificador from "@/hooks/notificador";

export default defineComponent({
  name: "FormularioApp",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id === this.id
      );
      this.nomeDoProjeto = projeto?.name || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  // mixins: [
  //   notificacaoMixin
  // ],
  methods: {
    salvar(): void {
      if (this.id) {
        this.store
          .dispatch(ALTERAR_PROJETOS, {
            id: this.id,
            name: this.nomeDoProjeto,
          })
          .then(() => this.lidarComSucesso());
      } else {
        this.store
          .dispatch(CADASTRAR_PROJETOS, this.nomeDoProjeto)
          .then(() => this.lidarComSucesso());
      }
    },
    lidarComSucesso(): void {
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Novo projeto foi salvo.",
        "Seu projeto já está disponível"
      );
      this.$router.push("/projetos");
    },
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador();
    return {
      store,
      notificar,
    };
  },
});
</script>
