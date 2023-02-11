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
  
  export default defineComponent({
    name: "ListApp",
    setup() {
      const store = useStore();
      return {
        projetos: computed(() => store.state.projetos),
      };
    },
  });
  </script>
  
  