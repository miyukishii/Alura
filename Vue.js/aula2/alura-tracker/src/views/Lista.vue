<template>
    <section>
      <router-link to="/projetos/novo" class="button">
          <i class="fas fa-plus pr-2"></i>
          Novo projeto
      </router-link>
  
      <table class="table is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
  
        <tbody>
          <tr v-for="(projeto, index) in projetos" :key="index">
            <td>{{ projeto.id }}</td>
            <td>{{ projeto.name }}</td>
            <td>
              <router-link :to="`/projetos/${projeto.id}`" class="button">
                <span class="icon is-small">
                  <i class="fas fa-pencil-alt"></i>
                </span>
              </router-link>
              <button class="button ml-2 is-danger" type="button" @click="removerProjeto(projeto.id)">
                <span class="icon is-small">
                  <i class="fas fa-trash"></i>
                </span>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import { useStore } from "@/store";
  import { computed } from "@vue/reactivity";
  import {EXCLUIR_PROJETO} from '@/store/mutation-types';
  import { OBTER_PROJETOS } from "@/store/actions-types";
  
  export default defineComponent({
    name: "ListApp",
    methods: {
      removerProjeto (id: string): void {
        this.store.commit(EXCLUIR_PROJETO, id);
      }
    },
    setup() {
      const store = useStore();
      store.dispatch(OBTER_PROJETOS);
      return {
        store,
        projetos: computed(() => store.state.projetos),
      };
    },
  });
  </script>
  
  