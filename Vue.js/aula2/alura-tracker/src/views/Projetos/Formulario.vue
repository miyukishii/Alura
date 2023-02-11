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
  import {ADICIONA_PROJETO, ALTERA_PROJETO} from '@/store/mutation-types';
  
  export default defineComponent({
    name: "FormularioApp",
    props: {
      id: {
        type: String
      }
    },
    mounted () {
      if(this.id) {
        const projeto = this.store.state.projetos.find((proj) => proj.id === this.id);
        this.nomeDoProjeto = projeto?.name || ''
      }
    },
    data() {
      return {
        nomeDoProjeto: "",
      };
    },
    methods: {
      salvar(): void {
        if(this.id) {
          this.store.commit(ALTERA_PROJETO, {
            id: this.id,
            name: this.nomeDoProjeto
          });
        } else {
          this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto);
        }
        this.nomeDoProjeto = "";
        this.$router.push('/projetos');
      },
    },
    setup () {
      const store = useStore();
      return {
        store,
      }
    }
  });
  </script>

  