import { Injectable } from '@nestjs/common';
import { PrismaService } from './../../prisma/prisma.service';
import { userRepository } from '../user-repositories';

import * as bcrypt from 'bcrypt';
@Injectable()
export class PrismaUserRepository implements userRepository {
  constructor(private prisma: PrismaService) {}
  async create(
    name: string,
    email: string,
    password: string,
    age: number,
  ): Promise<void> {
    const hash = bcrypt.hashSync(password, 10);
    await this.prisma.user.create({
      data: {
        name,
        email,
        password: hash,
        age,
      },
    });
  }
}
