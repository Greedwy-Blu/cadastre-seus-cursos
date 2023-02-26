import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { studyRepository } from '../study-repositories';

let id;
@Injectable()
export class PrismaStudyRepository implements studyRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    instuicao: string,
    curso: string,
    professores: string,
    id: number,
  ): Promise<void> {
    await this.prisma.study.create({
      data: {
        instuicao,
        curso,
        professores,
        userId: id,
      },
    });
  }
}
