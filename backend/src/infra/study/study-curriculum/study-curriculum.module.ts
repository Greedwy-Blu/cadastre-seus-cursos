import { createStudyBody } from './../../dtos/create-study-body';
import { curriculumService } from './study-curriculum.service';
import { PrismaService } from './../../database/prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  providers: [curriculumService, PrismaService, createStudyBody],
  exports: [curriculumService],
})
export class curriculumModule {}
