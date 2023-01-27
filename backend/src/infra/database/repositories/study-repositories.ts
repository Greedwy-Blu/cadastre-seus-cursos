export abstract class studyRepository {
  abstract create(
    instuicao: string,
    curso: string,
    professores: string,
  ): Promise<void>;
}
