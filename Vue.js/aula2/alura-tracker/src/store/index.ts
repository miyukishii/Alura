import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import { INotification } from "./../interfaces/INotification";
import {
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  ADICIONA_PROJETO,
  NOTIFICAR,
  DEFINIR_PROJETOS,
} from "./mutation-types";
import { OBTER_PROJETOS } from './actions-types';
import IProjeto from "@/interfaces/IProjeto";
import http from '@/http';

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
    [DEFINIR_PROJETOS](state, projetos: IProjeto[]) {
      state.projetos = projetos;
    },
    [NOTIFICAR] (state, novaNotificacao: INotification) {
      state.notificacoes.push(novaNotificacao);

      setTimeout(() => {
        state.notificacoes = state.notificacoes.filter((notificacao) => notificacao.id !== novaNotificacao.id);
      }, 2000)
    }
  },
  actions: {
    [OBTER_PROJETOS]({ commit }) {
      http.get('projetos')
        .then(response => commit(DEFINIR_PROJETOS, response.data))
    },
  }
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
