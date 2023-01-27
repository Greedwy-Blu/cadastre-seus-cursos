import { studyService } from './study.service';
import { AuthModule } from './../http/auth/auth.module';
import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [studyService, PrismaService, createUserBody],
  exports: [studyService],
})
export class studyModule {}
