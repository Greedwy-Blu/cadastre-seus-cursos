import { tokenService } from './../token/token.service';
import { JwtService } from '@nestjs/jwt';
import { userService } from './../../user/user.service';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private usersService: userService,
    private jwtService: JwtService,
    private tokenService: tokenService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.userFind(email);
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.email, sub: user.id };
    const token = this.jwtService.sign(payload);
    this.tokenService.save(token, user.email);
    return {
      access_token: token,
    };
  }
}
