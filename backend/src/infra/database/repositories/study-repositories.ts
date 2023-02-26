export abstract class studyRepository {
  abstract create(
    instuicao: string,
    curso: string,
    professores: string,
    userid: number,
  ): Promise<void>;
}
