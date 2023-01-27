import { createStudyBody } from './../dtos/create-study-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class studyService {
  constructor(
    private prisma: PrismaService,
    private createStudyBody: createStudyBody,
  ) {}

  async studyCreate(
    id: number,
    instuicao: string,
    curso: string,
    professores: string,
  ): Promise<createStudyBody | any> {
    await this.prisma.study.create({
      data: {
        instuicao: instuicao,
        curso: curso,
        professores: professores,
        userId: id,
      },
    });
  }

  async studyFind(id: number): Promise<createStudyBody | any> {
    await this.prisma.study.findMany({
      where: {
        id: id,
      },
    });
  }

  async studyUpadte(
    id: number,
    instuicao: string,
    curso: string,
    professores: string,
  ): Promise<createStudyBody | any> {
    await this.prisma.study.update({
      where: {
        id: id,
      },
      data: {
        instuicao: instuicao,
        curso: curso,
        professores: professores,
      },
    });
  }

  async studyDelete(id: number): Promise<createStudyBody | any> {
    await this.prisma.study.delete({
      where: {
        id: id,
      },
    });
  }
}
