export abstract class userFindRepository {
  abstract userFind(email: string): Promise<void>;
}
