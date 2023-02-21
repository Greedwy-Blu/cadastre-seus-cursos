import { IsNotEmpty } from 'class-validator';

export class createAnotacaoBody {
  id: number;

  @IsNotEmpty()
  descricao: string;

  @IsNotEmpty()
  titulo: string;
}
