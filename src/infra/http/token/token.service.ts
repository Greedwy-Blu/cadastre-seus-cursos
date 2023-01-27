import { userService } from './../../user/user.service';
import { forwardRef } from '@nestjs/common/utils';
import { PrismaService } from './../../database/prisma/prisma.service';
import { createTokenBody } from './dto/create-token-body';
import { JwtService } from '@nestjs/jwt';
import { Injectable, Inject } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class tokenService {
  constructor(
    private createTokenBody: createTokenBody,
    private prisma: PrismaService,
    private userService: userService,
    @Inject(forwardRef(() => AuthService))
    private authService: AuthService,
  ) {}

  async save(username: string, hash: string) {
    const objToken = await this.prisma.token.findFirst({
      where: {
        username: username,
      },
    });
    if (objToken) {
      this.prisma.token.update({
        where: {
          id: objToken.id,
        },
        data: {
          hash: hash,
        },
      });
    } else {
      this.prisma.token.create({
        data: {
          hash: hash,
          username: username,
        },
      });
    }
  }

  async refreshToken(oldToken: string) {
    const objToken = await this.prisma.token.findFirst({
      where: { hash: oldToken },
    });

    if (objToken) {
      return oldToken;
    } else {
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
