import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Module } from '@nestjs/common';
import { userService } from './user.service';

@Module({
  providers: [userService, PrismaService, createUserBody],
  exports: [userService],
})
export class userModule {}
