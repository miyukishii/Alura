import { store } from './../store/index';
import { NOTIFICAR } from './../store/mutation-types';
import { TipoNotificacao } from './../interfaces/INotification';

type Notificador = {
  notificar: (type: TipoNotificacao, title: string, text: string) => void;
}

export default () : Notificador => {
  const notificar =  (type: TipoNotificacao, title: string, text: string): void => {
    store.commit(NOTIFICAR, {
      title,
      text,
      type,
      id: new Date().getTime()
    })
  };

  return {
    notificar
  }
}