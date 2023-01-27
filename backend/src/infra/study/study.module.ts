import { createStudyBody } from './../dtos/create-study-body';
import { studyService } from './study.service';
import { PrismaService } from './../database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [],
  providers: [studyService, PrismaService, createStudyBody],
  exports: [studyService],
})
export class studyModule {}
