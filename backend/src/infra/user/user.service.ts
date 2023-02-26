import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Request } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
export type User = any;

@Injectable()
export class userService {
  constructor(private prisma: PrismaService) {}

  userFind(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }
  async findOneEmail(email: string): Promise<User> {
    return await this.prisma.user.findFirst({ where: { email: email } });
  }
  async findOneId(id: number): Promise<User> {
    return await this.prisma.user.findFirst({ where: { id: id } });
  }
}
