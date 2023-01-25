import { createUserBody } from './../dtos/create-user-body';
import { PrismaService } from './../database/prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { userFindRepository } from '../database/repositories/userFind-repositories';
@Injectable()
export class userService {
  constructor(
    private prisma: PrismaService,
    private createUserBody: createUserBody,
  ) {}

  async userFind(email: string): Promise<createUserBody | any> {
    await this.prisma.user.findUnique({ where: { email: email } });
  }
}
