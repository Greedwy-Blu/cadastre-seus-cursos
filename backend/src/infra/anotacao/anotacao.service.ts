import { createAnotacaoBody } from './../dtos/create-anotacao-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class anotacaoService {
  constructor(
    private prisma: PrismaService,
    private createAnotacaoBody: createAnotacaoBody,
  ) {}

  async anotacaoCreate(
    id: number,
    descricao: string,
    titulo: string,
  ): Promise<createAnotacaoBody | any> {
    await this.prisma.anotacao.create({
      data: {
        descricao: descricao,
        titulo: titulo,
        curriculumId: Number(id),
      },
    });
  }

  async anotacaoFind(id: number): Promise<createAnotacaoBody | any> {
    await this.prisma.anotacao.findMany({
      where: {
        id: id,
      },
    });
  }

  async anotacaoUpadte(
    id: number,
    descricao: string,
    titulo: string,
  ): Promise<createAnotacaoBody | any> {
    await this.prisma.anotacao.update({
      where: {
        id: id,
      },
      data: {
        descricao: descricao,
        titulo: titulo,
      },
    });
  }

  async anotacaoDelete(id: number): Promise<createAnotacaoBody | any> {
    await this.prisma.anotacao.delete({
      where: {
        id: id,
      },
    });
  }
}
