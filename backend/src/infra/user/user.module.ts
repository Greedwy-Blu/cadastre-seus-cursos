import { AuthModule } from './../http/auth/auth.module';
import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { userService } from './user.service';
import { forwardRef } from '@nestjs/common/utils';

@Module({
  imports: [forwardRef(() => AuthModule)],
  providers: [userService, PrismaService, createUserBody],
  exports: [userService],
})
export class userModule {}
