import { createStudyBody } from './../dtos/create-study-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
@Injectable()
export class studyService {
  constructor(
    private prisma: PrismaService,
    createStudyBody: createStudyBody,
  ) {}

  async studyCreate(email: string): Promise<createStudyBody | any> {
    await this.prisma.study.create({});
  }

  async studyFind(email: string): Promise<createStudyBody | any> {
    await this.prisma.study.findMany({});
  }

  async studyUpadte(email: string): Promise<createStudyBody | any> {
    await this.prisma.study.update({});
  }

  async studyDelete(email: string): Promise<createStudyBody | any> {
    await this.prisma.study.delete({});
  }
}
