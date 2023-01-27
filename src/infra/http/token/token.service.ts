import { PrismaService } from './../../database/prisma/prisma.service';
import { createTokenBody } from './dto/create-token-body';
import { JwtService } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
@Injectable()
export class tokenService {
  constructor(
    private createTokenBody: createTokenBody,
    private prisma: PrismaService,
  ) {}

  async save(username: string, hash: string) {
    this.prisma.token.create({
      data: {
        hash: hash,
        username: username,
      },
    });
  }
}
