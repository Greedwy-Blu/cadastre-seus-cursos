import { IsNotEmpty } from 'class-validator';

export class createUserBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  passaword: string;

  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  age: number;
}
