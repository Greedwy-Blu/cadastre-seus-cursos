export abstract class userRepository {
  abstract user(
    name: string,
    passaword: string,
    email: string,
    age: number,
  ): Promise<void>;
}
