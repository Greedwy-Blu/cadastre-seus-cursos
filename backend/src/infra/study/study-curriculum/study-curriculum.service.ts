import { createStudyBody } from './../../dtos/create-study-body';
import { PrismaService } from './../../database/prisma/prisma.service';

import { Injectable } from '@nestjs/common';
@Injectable()
export class curriculumService {
  constructor(
    private prisma: PrismaService,
    createStudyBody: createStudyBody,
  ) {}

  async studyFind(id: number): Promise<createStudyBody | any> {
    await this.prisma.curriculum.findMany({
      where: {
        id: id,
      },
    });
  }
}
