import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { InjectionKey } from "vue";

import { INotification, TipoNotificacao } from "./../interfaces/INotification";
import {
  ALTERA_PROJETO,
  EXCLUIR_PROJETO,
  ADICIONA_PROJETO,
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
    notificacoes: [
      {
        id: 1,
        text: "Uma notificação de sucesso",
        title: "sucesso",
        type: TipoNotificacao.SUCESSO,
      },
      {
        id: 2,
        text: "Uma notificação de atenção",
        title: "atenção",
        type: TipoNotificacao.ATENCAO,
      },
      {
        id: 3,
        text: "Uma notificação de falha",
        title: "falha",
        type: TipoNotificacao.FALHA,
      },
    ],
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
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
