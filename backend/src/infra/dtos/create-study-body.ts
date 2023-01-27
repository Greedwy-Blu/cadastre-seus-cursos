import { IsNotEmpty } from 'class-validator';

export class createStudyBody {
  @IsNotEmpty()
  instuicao: string;

  @IsNotEmpty()
  curso: string;

  @IsNotEmpty()
  professores: string;
}
