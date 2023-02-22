import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class userService {
  constructor(private prisma: PrismaService) {}

  userFind(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
}
