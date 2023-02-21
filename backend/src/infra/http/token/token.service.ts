import { userService } from './../../user/user.service';
import { forwardRef } from '@nestjs/common/utils';
import { PrismaService } from './../../database/prisma/prisma.service';
import { Injectable, Inject } from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';
import { AuthService } from '../auth/auth.service';
import { createUserBody } from '../../dtos/create-user-body';
import { createTokenBody } from './dto/create-token-body';
@Injectable()
export class tokenService {
  constructor(
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
      const user = await this.prisma.token.findFirst({
        where: { username: objToken.username },
      });
      return this.authService.login(user);
    } else {
      return new HttpException(
        {
          errorMessage: 'Token inválido',
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async getUsuarioByToken(token: string): Promise<createUserBody> {
    token = token.replace('Bearer ', '').trim();
    const objToken: createTokenBody = await this.prisma.token.findFirst({
      where: {
        hash: token,
      },
    });
    if (objToken) {
      const usuario = await this.userService.userFind(objToken.username);
      return usuario;
    } else {
      //é uma requisição inválida
      return null;
    }
  }
}
