export abstract class userRepository {
  abstract create(
    name: string,
    passaword: string,
    email: string,
    age: number,
  ): Promise<void>;
}
