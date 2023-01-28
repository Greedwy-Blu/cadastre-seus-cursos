import { createStudyBody } from './../../dtos/create-study-body';
import { PrismaService } from './../../database/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
@Injectable()
export class curriculumService {
  constructor(
    private prisma: PrismaService,
    createStudyBody: createStudyBody,
  ) {}

  async getcurriculum(id: number): Promise<createStudyBody | any> {
    await this.prisma.curriculum.findMany({
      where: {
        studyId: id,
      },
      select: {
        study: {
          select: {
            curso: true,
            instuicao: true,
            professores: true,
          },
        },
      },
    });
  }
}
