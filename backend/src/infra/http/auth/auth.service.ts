import { User } from 'src/infra/user/entities/user.entity';
import { tokenService } from './../token/token.service';
import { JwtService } from '@nestjs/jwt';
import { userService } from './../../user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createUserBody } from 'src/infra/dtos/create-user-body';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';
import { UnauthorizedError } from './errors/unauthorized.error';
import { UserA } from '../token/token.entity';
@Injectable()
export class AuthService {
  constructor(
    private usersService: userService,
    private jwtService: JwtService,
    private tokenService: tokenService,
  ) {}

  async login(user: User): Promise<UserToken> {
    const payload: UserPayload = {
      sub: user.id,
      email: user.email,
    };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email, user.id);

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateUser(email: string, password: string): Promise<User> {
    const user = await this.usersService.userFind(email);

    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return {
          ...user,
          password: undefined,
        };
      }
    }

    throw new UnauthorizedError(
      'Email address or password provided is incorrect.',
    );
  }
  async loginToken(token: string) {
    const user: User = await this.tokenService.getUsuarioByToken(token);
    if (user) {
      return this.login(user);
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
