import { IsNotEmpty } from 'class-validator';

export class createStudyBody {
  id: number;

  @IsNotEmpty()
  instuicao: string;

  @IsNotEmpty()
  curso: string;

  @IsNotEmpty()
  professores: string;
}
