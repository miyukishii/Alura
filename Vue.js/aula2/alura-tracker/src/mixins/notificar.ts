import { NOTIFICAR } from '../store/mutation-types';
import { TipoNotificacao } from '../interfaces/INotification';
import { store } from '@/store';

export const notificacaoMixin = {
  methods: {
    notificar (type: TipoNotificacao, title: string, text: string): void {
        store.commit(NOTIFICAR, {
          title,
          text,
          type,
          id: new Date().getTime()
        });
      },
  }
}