export abstract class anotacaoRepository {
  abstract create(descricao: string, title: string): Promise<void>;
}
