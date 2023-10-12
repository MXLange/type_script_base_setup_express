export default class AppError {

  public readonly mensagem: string;
  public readonly status: number;
  public queryRunner: any;

  constructor(mensagem: string, status: number = 400, queryRunner: any = null) {
    this.queryRunner = queryRunner;
    this.mensagem = mensagem;
    this.status = status;
  }

}