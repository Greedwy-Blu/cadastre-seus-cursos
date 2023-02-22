import { tokenService } from './../token/token.service';
import { JwtService } from '@nestjs/jwt';
import { User, userService } from './../../user/user.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { createUserBody } from 'src/infra/dtos/create-user-body';
import { UserToken } from './models/UserToken';
import { UserPayload } from './models/UserPayload';
import { UnauthorizedError } from './errors/unauthorized.error';
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
      name: user.name,
    };

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
    const user: createUserBody = await this.tokenService.getUsuarioByToken(
      token,
    );
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
