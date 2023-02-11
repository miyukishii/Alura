export enum TipoNotificacao {
    SUCESSO,
    FALHA,
    ATENCAO
}

export interface INotification {
  title: string,
  text: string,
  type: TipoNotificacao,
  id: number,
}