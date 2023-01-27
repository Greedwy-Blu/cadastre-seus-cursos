import { curriculumService } from './study-curriculum.service';
import { createUserBody } from './../../dtos/create-user-body';
import { PrismaService } from './../../database/prisma/prisma.service';
import { AuthModule } from './../../http/auth/auth.module';

import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [curriculumService, PrismaService, createUserBody],
  exports: [curriculumService],
})
export class curriculumModule {}
