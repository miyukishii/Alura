import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import { INotification } from "./../interfaces/INotification";
import {
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  ADICIONA_PROJETO,
  NOTIFICAR,
} from "./mutation-types";
import IProjeto from "@/interfaces/IProjeto";

interface Estado {
  projetos: IProjeto[],
  notificacoes: INotification[],
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
    notificacoes: [],
  },
  mutations: {
    // Somente mutations podem, de fato, alterar o estado da aplicação.
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        name: nomeDoProjeto,
      } as IProjeto;
      state.projetos.push(projeto);
    },
    [ALTERA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex((proj) => proj.id === projeto.id);
      state.projetos[index] = projeto;
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter((proj) => proj.id !== id);
    },
    [NOTIFICAR] (state, novaNotificacao: INotification) {
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter((notificacao) => notificacao.id !== novaNotificacao.id);
      }, 2000)
    }
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
